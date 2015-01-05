// app.js
var shopApp = angular.module('shopApp', ['ui.router']);

shopApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../app_shop/shophome/home.html',
            controller: 'shop.homeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
           url: '/about',
            templateUrl: '../app_shop/about/about.html',
            controller: function($scope) {
                $scope.message = 'This is a example of a shopping cart.';
            }
        });

    // TODO: CHECKOUT - http://bootsnipp.com/snippets/featured/credit-card-form-bootstrap-3

});