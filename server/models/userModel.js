const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    climbs: [climbSchema]
});



const climbSchema = new Schema({
    name: {type: String, required: true},
    grade: {type: Number, required: true},
    location: {type: String, required: true},
});

const User = mongoose.model('user', userSchema);

module.exports = User;