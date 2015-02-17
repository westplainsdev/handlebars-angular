// app.js
var showApp = angular.module('showApp', ['ui.router']);

showApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/shows');

    $stateProvider

        // MASTER STATE VIEW ========================================
        .state('shows', {
            url: '/shows',
            templateUrl: '../app_shows/show_list/list.html',
            controller: 'show.listController'
        })

        // DETAILED STATE VIEW =================================
        .state('shows.details', {
            url: '/details/:id',
            templateUrl: '../app_shows/show_details/details.html',
            controller: 'show.detailsController'
        })

        .state('shows.about', {
            url: '/about',
            templateUrl: '../app_shows/about/about.html',
            controller: function($scope) {
                $scope.message = 'This is a example of using the state provider.';
            }
        });

});