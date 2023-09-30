//const routes = require('express').Router(); // A Router instance is a complete MIDDLEWARE and routing system
// it is often referred to as a “mini-app”.
//  Routes = New Router object in your program to handle Requests
//  Multiple requests can be easily differentiated with the help of the Router() function in Express.js.

// const myController = require('../controllers');

//routes.get('/', myController.awesomeFunction); // the application “listens” for requests that match the specified route(s) and method(s)
//when it detects a match, it calls the specified callback function.
// routing methods can have more than one callback function as arguments.
//With multiple callback functions, it is important to provide next as an argument to the callback function
// and then call next() within the body of the function to hand off control to the next callback.

// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts')); // app.METHOD(PATH/PATTERN, HANDLER) where PATH is a path on the server

module.exports = router;
