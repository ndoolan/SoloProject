const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
    const { username, password } = req.body
    
    const newUser = await User.create({username: username, password: password})
    
    res.locals.user = newUser;
        next()
    } catch (error) {
        return next({
            log: 'error occurred creating the user',
            status: 400,
            message: {error: 'invalid user request'}
        })
    }
}

userController.verifyUser = async (req, res, next) => {
    try {
       
        const { username, password } = req.body
        console.log(username, password)
        const user = await User.findOne({"username": username});
        
        if(!user) {
          console.log('no user')
        } else {
            bcrypt.compare(password, user.password)
            .then((result) => {
                console.log(result)
                if(result) {
                    res.locals.user = user;
                    return next()
                }
            }
        )}        
    } catch (error) {
        return next({
            log: error,
            status: 400,
            message: {error: 'invalid username and password combination'}
        })
    }
}

module.exports = userController;