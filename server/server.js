const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const PORT = 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter.js")
const climbsRouter = require("./routes/climbsRouter.js")

const userController = require("./controllers/authController.js");
const climbController = require("../server/controllers/climbController.js");
const cookieController = require("../server/controllers/cookieController.js");

// CORS Options test THIS IS NOT NECESSARILY NEEDED
const corsOptions = {
  origin: "http://localhost:8080",
  methods: "GET, POST, DELETE",
  allowedHeaders: "Content-Type",
  // withCredential: true,
  credentials: true, // make sure this syntax does not change - for axios
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to Database
require("dotenv").config();
mongoose.connect(process.env.URI).then(() => {
  console.log("Connected to DB");
});

app.use("/build", express.static(path.resolve(__dirname, "../build")));

// temporarily adding this before catch all for now
app.get("/home", climbController.getTotalClimbs, (req, res) => {
  console.log(res.locals.totalClimbs);
  return res.status(200).json(res.locals.totalClimbs)
});

app.use("/climbs", climbsRouter);
// // initial get request
app.get("*", (req, res) => {
  console.log("no build");
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.use("/auth", authRouter);
// app.use("/climbs", climbsRouter);

// Get All Climbs
// app.get("/home", climbController.getTotalClimbs, (req, res) => {
//   return res.status(200);
// });

app.use((err, req, res, next) => {
  const defaultErr = {
    log: err,
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Sever listen on port: ${PORT}...`);
});

module.exports = app;
