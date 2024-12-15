const express = require("express");
const authController = require("../controllers/authController");
// const {signup, login} = = require("../controllers/authController"); router.post("/signup",signup);
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
