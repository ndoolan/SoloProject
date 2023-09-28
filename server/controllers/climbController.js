const User = require('../models/userModel.js')

const climbController = {};

climbController.createClimb = async (req, res, next) => {
    try{
        console.log("<<<<>>>>>")
        console.log(req)
        const { name, grade, location } = req.body
    
    } catch (error) {
        return next({
            log: 'error occurred creating the new climb',
            status: 400,
            message: {error: 'invalid climb input'}
        })
    }
}

module.exports = climbController;