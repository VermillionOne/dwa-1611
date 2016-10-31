// Grab our dependencies
const express = require('express'),
    bodyParser = require('body-parser'),
    $j = require('jquery'),
    app = express(),
    port = process.env.PORT || 3000,
    expressLayouts = require('express-ejs-layouts');

// Configure our Application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// Set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set the routes
// Routes file for views
app.use('/', require('./app/routes'));
// Routes File for accessing API
app.use(require('./app/routes/index'));

exports.server = app.listen(port, () => {
    console.log('Server Active On ', port);
});
