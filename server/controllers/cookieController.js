const User = require("../models/userModel.js");

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  try {
    console.log("inside cookie");
    const user_id = res.locals.user._id;
    res.cookie("Ticklist_ID", user_id, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
    });
    //  res.cookie('Ticklist_ID', '1234')
    return next();
  } catch (error) {
    return next({
      log: "error occurred setting user cookie",
      status: 400,
      message: { error: "setCookie issue" },
    });
  }
};

cookieController.clearCookie = (req, res, next) => {
  try {
  res.clearCookie("Ticklist_ID")
  return next();
  } catch (error) {
    return next({
      log: "error occurred clearing user cookie",
      status: 400,
      message: { error: "Clearing Cookie Issue" },
    })
  }
}

module.exports = cookieController;
