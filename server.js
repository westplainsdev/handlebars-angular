var express = require('express');
var bodyParser = require('body-parser');
var app = express();
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

// define extra view directories here using the "partialsDir" property.
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs', partialsDir: 'views/partials/', partialsDir: 'views/apps/' }));
app.set('view engine', 'hbs');

// setup application page routes
routes.register(app);
applications.register(app);

// setup api endpoints for single page apps
apis.register(app);

// 404 errors after all other routes have been attempted
// http://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
app.use(function(req, res){
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }
});



app.listen(config.server.port);

console.log("Server started on port: " + config.server.port);