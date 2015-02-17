showApp.controller('show.detailsController', ['$scope','$stateParams', 'ShowsService', function($scope, $stateParams, ShowsService) {
    $scope.selectedShow = ShowsService.findBy($stateParams.id);
}]);