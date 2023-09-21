const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// serve static file
// app.use(express.static(path.resolve(__dirname, '../public')))

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req,res) => {
    return res.status(200).sendFile(path.resolve(__dirname,'../index.html'))
});

// sample get request
app.get('/main', (req, res) => {
    return res.status(200).json('hello world');
})

// global error handler
app.use('*', (error, req, res) => {
    return res.status(500).json('bad bad')
})

app.listen(PORT, () => {
    console.log(`Sever listen on port: ${PORT}...`);
});

module.exports = app;

