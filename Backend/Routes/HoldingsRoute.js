const express = require("express");
const { HoldingModel } = require('../Model/HoldingModel');
const verifyToken = require('../Middleware/authMiddleware');
const router = express.Router();

router.get("/allHoldings", verifyToken, async (req, res) => {
  try {
    const userId = req.user._id;
    const allHoldings = await HoldingModel.find({ userId });
    res.json(allHoldings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;