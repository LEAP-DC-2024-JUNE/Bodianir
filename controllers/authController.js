const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateJwtToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const aUser = await User(req.body);
    const newUser = await aUser.save();

    res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (error) {
    if (
      error.name === "ValidationError" ||
      (error.name === "MongoServerError" && error.code === 11000)
    ) {
      return res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password!",
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    console.log(user);

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Cant find email and password please try again!",
      });
    }
    const jwtToken = generateJwtToken(user._id, user.name, user.email);
    res.status(200).json({
      status: "success",
      message: "You are logged succesfully!",
      token: jwtToken,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// 401 lack of validation information
//400 bad request
