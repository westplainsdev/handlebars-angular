chanceApp.service('LocalStorageService', function(){

    return{
        checkStorage: function(action){
            var taste = localStorage.getItem('favoriteflavor');
            var storageActiveFlag, localMessage;
            switch(action){
                case 'add':
                    if(taste){
                        localMessage = 'local storage has already been added';
                    } else {
                        localStorage.setItem('favoriteflavor','vanilla');
                        localMessage = 'local storage has been added';
                    }
                    storageActiveFlag = true;
                    break;
                case 'read':
                    if(taste){
                        localMessage = taste;
                        storageActiveFlag = true;
                    } else {
                        localMessage = 'local storage is empty';
                    }
                    break;
                case 'remove':
                    storageActiveFlag = false;
                    if(taste){
                        localStorage.removeItem('favoriteflavor');
                        localMessage = 'removed ' + taste + ' from local storage';
                    } else {
                        localMessage = 'no keys found in local storage';
                    }
                    break;
                default:
                    if(taste){
                        storageActiveFlag = true;
                    } else {
                        storageActiveFlag = false;
                    }
                    break;
            }

            var messageAndFlag = {
                message: localMessage,
                flag: storageActiveFlag
            }

            return messageAndFlag;
        }
    }

});