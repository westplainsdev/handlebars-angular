module.exports = {
    register: function (app) {
        app.get('/address', function (req, res){
            var data = { description: 'AngularJS address book example application.', full: true}
            res.render('apps/address', data);
        });

        app.get('/shop', function (req, res){
            var data = { description: 'AngularJS shopping cart example application.', full: true}
            res.render('apps/shop', data);
        });

        app.get('/shows', function (req, res){
            var data = { description: 'AngularJS master / details example.', instructions: 'Click one of the links below to view the details', full: true}
            res.render('apps/shows', data);
        });

        app.get('/chance', function (req, res){
            var data = { description: 'AngularJS random information example application.', full: true}
            res.render('apps/chance', data);
        });

        app.get('/grades', function (req, res){
            var data = { description: 'AngularJS grade book example application.', full: true}
            res.render('apps/grades', data);
        });

    }
};