var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var expressHbs = require('express3-handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/simple', function(req, res){
    var data = {name: 'Gorilla'};
    res.render('simple', data);
});

app.get('/complex', function(req, res){
    var data = {
        name: 'Gorilla',
        address: {
            streetName: 'Broadway',
            streetNumber: '721',
            floor: 4,
            addressType: {
                typeName: 'residential'
            }
        }
    };
    res.render('complex', data);
});

app.get('/loop', function(req, res){
    var basketballPlayers = [
        {name: 'Lebron James', team: 'the Heat'},
        {name: 'Kevin Durant', team: 'the Thunder'},
        {name: 'Kobe Jordan',  team: 'the Lakers'}
    ];

    var days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    var data = {
        basketballPlayers: basketballPlayers,
        days: days
    };

    res.render('loop', data);
});

app.get('/logic', function(req, res){
    var data = {
        upIsUp: true,
        downIsUp: false,
        skyIsBlue: "yes"
    };

    res.render('logic', data);
});

app.get('/question', function (req, res){
    var data = {
        instructions: 'Fill out the form below'
    };

    res.render('question', data);
});

app.post('/answer', function(req, res){
    var userName = req.body.userName;
    var data = {
        html: userName
    }
   res.render('answer', data);
});

app.get('/angular', function(req, res){
    var data = {
        description: 'This is an AngularJS application running within an Express/Node.js site.'
    }
    res.render('angular', data);
});

app.get('/license', function (req, res){
    res.render('license');
});

app.listen(3001);
console.log('server listing on port 3001');