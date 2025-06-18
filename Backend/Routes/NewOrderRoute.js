const express = require('express');
const { OrdersModel } = require('../Model/OrdersModel');
const { HoldingModel } = require('../Model/HoldingModel');
const {PositionsModel} = require('../Model/PositionsModel');
const verifyToken = require('../Middleware/authMiddleware');
const router = express.Router();

router.post("/newOrder", verifyToken, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const userId = req.user._id;

  let newOrder = new OrdersModel({ userId, name, qty, price, mode });
  await newOrder.save();

  if (mode === 'BUY') {
    const orderExists = await HoldingModel.findOne({ name, userId });
    const positionExists = await PositionsModel.findOne({ name, userId });

    if (orderExists && positionExists) {
      const totalQty = orderExists.qty + qty;
      const totalInvest = orderExists.avg * orderExists.qty + price;
      const newAvg = totalInvest / totalQty;

      orderExists.qty = totalQty;
      orderExists.price = totalInvest;
      orderExists.avg = newAvg;

      positionExists.price = totalInvest;
      positionExists.avg = newAvg;
      positionExists.qty = totalQty;
      positionExists.isLoss = true; // or whatever your schema expects

      await orderExists.save();
      await positionExists.save();

    } else {
      const newHolding = new HoldingModel({
        userId,
        name,
        qty,
        avg: price,
        price,
        net: "+0.00%",
        day: "+0.00%",
      });
      await newHolding.save();

      const nPosition = new PositionsModel({
        userId,
        name,
        qty,
        avg: price,
        price,
        net: "+0.00%",
        day: "+0.00%",
        isLoss: true, // or whatever your schema expects
      });
      await nPosition.save();
    }

  }

  if (mode === 'SELL') {
    const holdingExist = await HoldingModel.findOne({ name, userId });
    const positionExist = await PositionsModel.findOne({ name, userId });

    if (holdingExist && holdingExist.qty >= qty) {
      const remainingQty = holdingExist.qty - qty;
      const remainingInvest = holdingExist.avg * remainingQty;

      if (remainingQty > 0) {
        holdingExist.qty = remainingQty;
        holdingExist.price = remainingInvest;
        holdingExist.avg = remainingQty > 0 ? remainingInvest / remainingQty : 0;
        await holdingExist.save();

        if (positionExist) {
          positionExist.qty = remainingQty;
          positionExist.price = remainingInvest;
          positionExist.avg = remainingQty > 0 ? remainingInvest / remainingQty : 0;
          await positionExist.save();
        }
      } else {
        // Remove holding and position if all stocks sold
        await HoldingModel.deleteOne({ _id: holdingExist._id });
        if (positionExist) {
          await PositionsModel.deleteOne({ _id: positionExist._id });
        }
      }
    }
  }

  res.json({ message: "Order processed" });
});

module.exports = router;