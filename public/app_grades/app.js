// app.js
var gradesApp = angular.module('gradesApp', ['ui.router', 'xeditable']);

gradesApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../app_grades/gradehome/home.html',
            controller: 'grades.homeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
           url: '/about',
            templateUrl: '../app_grades/about/about.html',
            controller: function($scope) {
                $scope.message = 'This is a example of a grade book.';
            }
        });

});

gradesApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});