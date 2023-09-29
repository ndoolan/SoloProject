const User = require("../models/userModel.js");

const climbController = {};

climbController.getTotalClimbs = async (req, res, next) => {
  try {
    const { Ticklist_ID } = req.cookies;
    const user = await User.findById({ _id: Ticklist_ID });
    res.locals.totalClimbs = user.totalClimbs;
    return next();
  } catch (error) {
    return next({
      log: "error occurred getting the total climbs",
      status: 400,
      message: { error: "invalid climb input for total climbs" },
    });
  }
};

climbController.createClimb = async (req, res, next) => {
  try {
    const { Ticklist_ID } = req.cookies;
    const { name, grade, location } = req.body;
    // const user = await User.findById({_id: Ticklist_ID })

    const user = await User.findByIdAndUpdate(
      { _id: Ticklist_ID },
      {
        $push: {
          totalClimbs: { name: name, grade: grade, location: location },
        },
      },
    );

    if (!user) {
      throw new Error("User not found");
    }

    // res.locals is currently one behind created climb although new climbs go through correctly
    res.locals.totalClimbs = user.totalClimbs;
    return next();
  } catch (error) {
    return next({
      log: "error occurred creating the new climb",
      status: 400,
      message: { error: "invalid climb input" },
    });
  }
};

module.exports = climbController;
