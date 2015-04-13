chanceApp.controller('chance.homeController', function($scope, $http, LocalStorageService, ConditionMessage){

    // http://chancejs.com/#

    var person = {
            fullname: chance.name(),
            dateofbirth: chance.birthday(),
            gender: chance.gender(),
            address: chance.address(),
            phonenumber: chance.phone()
        },
        pageInfo = {
            hashCode: chance.hash({length: 15}),
            informationMessage: 'Life is good.'
        },
        setMessagesAndFlags = function(checkItem){
            $scope.localMessage = checkItem.message;
            $scope.storageActive = checkItem.flag;
        },
        setConditions = function(currentCondition){
            $scope.isError = currentCondition.isError;
            $scope.isWarning = currentCondition.isWarning;
            $scope.informationMessage = currentCondition.informationMessage;
        },

        loadUrls = function(){
            $http.get('/api/loadUrls').success(function(result){
                $scope.url = result;
            });
        };

    $scope.person = person;
    $scope.hashCode = pageInfo.hashCode;
    $scope.informationMessage = pageInfo.informationMessage;

    $scope.setCondition = function(condition){
        setConditions(ConditionMessage.set(condition));
    };

    $scope.addLocalStorage = function(){
        setMessagesAndFlags(LocalStorageService.checkStorage('add'));
    };

    $scope.readFromStorage = function(){
        setMessagesAndFlags(LocalStorageService.checkStorage('read'));
    };

    $scope.removeFromStorage = function(){
        setMessagesAndFlags(LocalStorageService.checkStorage('remove'));
    };

    // run on page load
    setMessagesAndFlags(LocalStorageService.checkStorage());
    loadUrls();
});