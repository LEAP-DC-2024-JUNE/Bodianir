const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { use } = require("../routers/authRouter");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password!"],
    minlength: 4,
    select: false,
  },
  confirmpassword: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      validator: function (element) {
        return element === this.password;
      },
      message: "Passwords not matched! please try again",
    },
  },
});

userSchema.pre("save", async function () {
  this.confirmpassword = undefined;
  this.password = await bcrypt.hash(this.password, 12);
  // if (!this.isModified("password")) {
  //   return next();
  // }
});

userSchema.methods.correctPassword = async function (
  userInputPassword,
  userPassword
) {
  const areThePasswordMatched = await bcrypt.compare(
    userInputPassword,
    userPassword
  );
  return areThePasswordMatched;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
