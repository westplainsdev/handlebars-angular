chanceApp.controller('chance.addremoveController', function($scope, $http, $log){

    var index = 0,
        idCounter = 1,
        objectCollection = [],
        increaseArray = function(){
            var localObject = { id: idCounter++,  name: 'Added Object' };
            objectCollection.push(localObject);
            $scope.objectCollection = objectCollection;
        },
        cleanUpArray = function(removeItem){

            // Find and remove item from an array
            var index = objectCollection.indexOf(removeItem);
            if(index != -1) {
                objectCollection.splice(index, 1);
            }
            $scope.objectCollection = objectCollection;
        },
        selectObject = function(selectItem){
            index = objectCollection.indexOf(selectItem);
            var localVersion = angular.copy(selectItem);
            $scope.found = localVersion;
        },
        saveEdit = function(saveItem){
            objectCollection[index] = saveItem;
            $scope.objectCollection = objectCollection;
        },
        checkEditForm = function(removeItem){
           if($scope.found){
               if(angular.equals($scope.found.id, removeItem.id)){
                   cleanUpEdit();
               }
           }
        },
        cleanUpEdit = function(){
            $scope.found = null;

        };

    $scope.increaseArray = function(){
        increaseArray();
        $log.log('I have added an element.');
    };

    $scope.removeItem = function(removeItem){
        cleanUpArray(removeItem);
        $log.warn('I have removed an element');
        checkEditForm(removeItem);
    };

    $scope.selectObject = function(selectItem){
        selectObject(selectItem);
        $log.log('An item has been selected.');
    };

    $scope.saveEdit = function(saveItem){
        saveEdit(saveItem);
        cleanUpEdit();
    };

});