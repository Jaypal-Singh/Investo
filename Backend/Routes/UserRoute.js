// Backend/Routes/UserRoute.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/authMiddleware');
const User = require('../Model/UserModel');


router.get('/user-summary', verifyToken, async(req, res) => {
  
  try{
    const userId = req.user._id;
    const user =  await User.findById(userId);
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    res.json({
    name: user.name,
  });
  }catch (err){
    res.status(500).json({message : "Server error"});
  }  
});

module.exports = router;