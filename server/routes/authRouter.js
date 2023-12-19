const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController")
const cookieController = require("../controllers/cookieController")

router.post("/signup", authController.createUser, cookieController.setCookie, (req, res) => {
  return res.status(200).json("true");
});

router.post("/login", authController.verifyUser, cookieController.setCookie, (req, res) => {
      console.log("last stop");
      return res.status(200).json("true");
    });

router.post("/logout", cookieController.clearCookie, (req, res) => {
      console.log('outside cookie clear')
      return res.status(200).json("Cookie Cleared");
    });

module.exports = router;

