const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;

const climbSchema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  location: { type: String, required: true },
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  totalClimbs: [climbSchema],
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

const User = mongoose.model("users", userSchema);

module.exports = User;
