showApp.controller('show.listController', ['$scope','ShowsService', function($scope, ShowsService) {
    $scope.shows = ShowsService.list();
}]);