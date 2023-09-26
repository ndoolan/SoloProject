const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors')

const userController = require('../server/controllers/userController.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// serve static file
// app.use(express.static(path.resolve(__dirname, '../public')))

// Connect to Database
require('dotenv').config();
mongoose.connect(process.env.URI)
    .then(() => {
        console.log('Connected to DB')
    })

app.use('/build', express.static(path.resolve(__dirname, '../build')));

// initial get request
app.get('/login', (req,res) => {
    console.log('test')
    return res.status(200).sendFile(path.resolve(__dirname,'build', 'index.html'))
});

app.get('/home', (req,res) => {

    return res.status(200).sendFile(path.resolve(__dirname,'build', 'index.html'))
});

// signup routes
app.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user)
})

// login routes 
app.post('/', userController.verifyUser, (req, res) => {
    console.log('fina')
    return res.redirect('/home')
})

// catch all
// app.get('*', (req,res) => {
//     console.log('test')
//     return res.status(200).sendFile(path.resolve(__dirname,'build', 'index.html'))
// });



// catch-all w broser router
// app.use('/*', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname,'../index.html'))
// })


// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: err,
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Sever listen on port: ${PORT}...`);
});

module.exports = app;

