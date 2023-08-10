const express = require("express");
const router = express.Router();
const authController = require("../controlleres/authController");

router.post("/", authController.handleLogin);

module.exports = router;
