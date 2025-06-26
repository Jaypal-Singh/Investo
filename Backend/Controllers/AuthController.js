const UserModel = require("../Model/UserModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

 const Signup = async (req, res, next) => {
  try {
    console.log("Signup API hit", req.body);
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409)
            .json({ message: "User already exists" , success: false});
    }
    const userModel = new UserModel ({
      name,
      email,
      password,
      createdAt: new Date()
    });
    userModel.password = await bcrypt.hash(password, 12);

    await userModel.save();
    
    res.status(201)
      .json({ message: "User signed in successfully", success: true});

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(409)
            .json({ message: "Wrong Username or password" , success: false});
    }
    const isPassEqual = await bcrypt.compare(password, existingUser.password)
    if(!isPassEqual){
        return res.status(403)
                .json({message : "Wrong Username or password", success:false});
    }
    const jwtToken = jwt.sign(
        {email:existingUser.email, _id : existingUser._id},
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
    )

    res.status(200)
      .json({ 
        message: "User Loged in successfully", 
        success: true,
        jwtToken,
        email,
        name:existingUser.name
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = {
    Signup,
    Login
}