addressApp.factory('ContactFactory', function(){
    return {
        getDataList: [
            {firstname: 'Bob', lastname: 'Jones', citystate: 'Seattle, WA'},
            {firstname: 'Sandy', lastname: 'Roberts', citystate: 'Portland, OR'},
            {firstname: 'Larry', lastname: 'Walker', citystate: 'San Francisco, CA'},
            {firstname: 'Adrian', lastname: 'Parker', citystate: 'Las Vegas, NV'}
        ]
    };
});