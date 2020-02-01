/** Import librairies **/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

/** Configure network **/
const hostname = '0.0.0.0';
const port = 3000;

/** Database connection **/
mongoose.connect('mongodb://mongo/' + process.env.DB_NAME);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Link to route files **/
// Import anonymous functions in constant variables
// const sessionRoute = require('./api/routes/sessionRoute');
// const moduleRoute = require('./api/routes/moduleRoute');
const userRoute = require('./api/routes/userRoute');
// const markRoute = require('./api/routes/markRoute');
// Use anonymous function saved in constant variables
// sessionRoute(app);
// moduleRoute(app);
userRoute(app);
// markRoute(app);

/** Bind and listen for connections on the specified host and port **/
app.listen(port, hostname);