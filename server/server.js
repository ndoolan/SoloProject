const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userController = require('../server/controllers/userController.js')
const climbController = require('../server/controllers/climbController.js')
const cookieController = require('../server/controllers/cookieController.js')





// CORS Options test THIS IS NOT NECESSARILY NEEDED
const corsOptions = {
    origin: 'http://localhost:8080',
    methods: 'GET, POST', 
    allowedHeaders:'Content-Type',
    // withCredential: true,
    credentials: true // MAKE SURE THIS STAYS TRUE, NEEDED FOR USING COOKIES WITH CORS
  }
  // no cors options right now 
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser())

// HEADER TEST
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Credentials", true)
//     // res.header(
//     //   "Access-Control-Allow-Headers",
//     //   "Origin, X-Requested-With, Content-Type, Accept"
//     // );
//     return next();
//   });




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
app.get('*', (req,res) => {
    console.log('no build')
     res.status(200).sendFile(path.resolve(__dirname, '..','build', 'index.html'))
});


// signup routes
app.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user)
})

// login routes 
app.post('/', 
    userController.verifyUser, 
    cookieController.setCookie,  
    (req, res) => {
        console.log(res.cookies)
    return res.status(200).json('true')
})

// create climb routes
// removing create climb controller for now
app.post('/home', climbController.createClimb, (req, res) => {
    console.log('test')
    return res.status(200).send('success')
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

