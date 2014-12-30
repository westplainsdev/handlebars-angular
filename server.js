var express = require('express');
var bodyParser = require('body-parser');
// var request = require('request');
var app = express();
var expressHbs = require('express3-handlebars');
var config = require('./configuration/config.js');
var routes = require('./routes/routes');
var apis = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

// setup application page routes
routes.register(app);

// setup api endpoints for single page applications
apis.register(app);

app.listen(config.server.port);

console.log("Server started on port: " + config.server.port);