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

        .state('checkout', {
            url: '/checkout',
            templateUrl: '../app_shop/checkout/checkout.html',
            controller: 'shop.checkoutController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: '../app_shop/about/about.html',
            controller: function($scope) {
                $scope.message = 'This is a example of a shopping cart with a simple checkout process.';
            }
        });

});