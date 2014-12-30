// EXPRESS PAGE ROUTING


module.exports = {
    register: function(app) {

        // Default routes for the entire application to launch.
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

        app.get('/address', function (req, res){
            var data = { description: 'AngularJS address book example application.'}
            res.render('address', data);
        });

        app.get('/shop', function (req, res){
            var data = { description: 'AngularJS shopping cart example application.'}
            res.render('shop', data);
        });


    }
};