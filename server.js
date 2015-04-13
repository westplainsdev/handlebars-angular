var express = require('express');
var bodyParser = require('body-parser');
// var request = require('request');
var moment = require('moment');

;var app = express();
var expressHbs = require('express3-handlebars');
var config = require('./configuration/config.js');
var routes = require('./routes/routes');
var applications = require('./routes/applications');
var apis = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

// define extra view directories here usign the "partialsDir" property.
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs', partialsDir: 'views/partials/', partialsDir: 'views/apps/' }));
app.set('view engine', 'hbs');

// if this middleware function if uncommentd, it will be executed for every request to the app
//app.use(function (req, res, next) {
//    console.log('Time: %s', moment().format());
//    // calling next() will have the application follow through to the middleware function.
//    next();
//});

// setup application page routes
routes.register(app);
applications.register(app);

// setup api endpoints for single page applications
apis.register(app);

app.listen(config.server.port);

console.log("Server started on port: %d", config.server.port);