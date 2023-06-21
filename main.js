const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* **********************************setting headers and methods************************** */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "*"
    );
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});

/* **********************************Initializing Routes ********************************* */

// if (process.env.NODE_ENV === 'production') {
// Set static folder
//this.app.use(express.static(path.join(__dirname, '../web-app/build')));
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     this.app.use(express.static(path.join(__dirname, '../web-app/build')));

//     this.app.get('/*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../web-app/build/index.html'));
//     });
// }

// this.app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../web-app/build/index.html'));
// });
// app.use(express.static('build'));
app.use(express.static(path.join(__dirname, './aayamskinclinic/build')));

app.get('/*', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    res.sendFile(path.join(__dirname, './aayamskinclinic/build/index.html'));
});
// }

module.exports = app;