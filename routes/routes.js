// EXPRESS PAGE ROUTING


module.exports = {
    register: function(app) {

        // Default routes for the entire application to launch.
        app.get('/', function(req, res){
            res.render('index');
        });

        app.get('/license', function(req, res){

            res.render('license');
        });

        app.get('/reference', function (req, res){
            res.render('reference');
        });

        app.get('/simple', function(req, res){
            var data = {name: 'Gorilla'};
            res.render('partials/simple', data);
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
            res.render('partials/complex', data);
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

            res.render('partials/loop', data);
        });

        app.get('/logic', function(req, res){
            var data = {
                upIsUp: true,
                downIsUp: false,
                skyIsBlue: "yes"
            };

            res.render('partials/logic', data);
        });

        app.get('/question', function (req, res){
            var data = {
                instructions: 'Fill out the contact form below'
            };

            res.render('partials/question', data);
        });

        app.post('/answer', function(req, res){

            var data = {
                contact: {
                    userName:  req.body.userName,
                    email:  req.body.email,
                    subject: req.body.subject,
                    message: req.body.message
                }

            };

            res.render('partials/answer', data);
        });
    }
};