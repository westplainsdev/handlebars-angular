addressApp.factory('ContactFactory', function($http){
    return {

        loadContacts: function(){
            return $http.get('/api/address/contacts');
        }
    };
});