const express = require('express');
const {PositionsModel} = require('../Model/PositionsModel');
const verifyToken = require('../Middleware/authMiddleware');
const router = express.Router();

router.get("/allPositions", verifyToken, async (req, res) => {
  try{
          const userId = req.user._id;
          const allPositions = await PositionsModel.find({userId});
          if(!allPositions){
             return res.status(401).json({ message : "orders not found", success : false})
          }
          res.json(allPositions);
      }catch(error){
          console.error(error);
          res.status(500).json({ message: "Server error" });
      }
});

module.exports = router;