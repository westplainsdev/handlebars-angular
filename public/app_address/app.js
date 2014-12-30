// app.js
var addressApp = angular.module('addressApp', ['ui.router']);

addressApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../app_address/addressbook/book.html',
            controller: 'address.bookController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
           url: '/about',
            templateUrl: '../app_address/about/about.html',
            controller: function($scope) {
                $scope.message = 'This is a example of an address book.';
            }
        });

});