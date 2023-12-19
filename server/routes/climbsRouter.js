const express = require("express");
const router = express.Router();

const cookieController = require("../controllers/cookieController")
const climbController = require("../controllers/climbController")

router.get("/getAllClimbs", climbController.getTotalClimbs, (req, res) => {
    console.log('clearpath')
    return res.status(200);
  });

router.post("/logClimb", climbController.createClimb, (req, res) => {
    console.log(res.locals.totalClimbs);
    return res.status(200).json(res.locals.totalClimbs);
  });

router.post("/deleteClimb", climbController.deleteClimb, (req, res) => {
    return res.status(200).json(res.locals.totalClimbs)
  })


module.exports = router;