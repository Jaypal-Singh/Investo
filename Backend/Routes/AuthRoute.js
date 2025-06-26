const router = require("express").Router();

const { Signup , Login } = require("../Controllers/AuthController");
const {signUpValidation,loginValidation} = require("../Middleware/AuthValidation");

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
