// app.js
var chanceApp = angular.module('chanceApp', ['ui.router']);

chanceApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/chance');

    $stateProvider

        // MASTER STATE VIEW ========================================
        .state('chance', {
            url: '/chance',
            templateUrl: '../app_chance/home/home.html',
            controller: 'chance.homeController'
        })
        .state('addremove', {
            url: '/addremove',
            templateUrl: '../app_chance/addremove/addremove.html',
            controller: 'chance.addremoveController'
        })
        .state('sendmail', {
            url: '/mail',
            templateUrl: '../app_chance/mail/mail.html',
            controller: 'chance.mailController'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: '../app_address/about/about.html',
            controller: function($scope) {
                $scope.message = 'This example shows express mailer, chance.js, local storage and ng-class toggling.';
            }
        });



});