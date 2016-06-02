addressApp.controller('address.bookController', function ($scope, ContactFactory) {
    // serving up the data from a factory
    var addressArray = [];

    ContactFactory.loadContacts().then(function(response) {
        addressArray = response.data;
        $scope.addressList = addressArray;
    });

    var resetForm = function () {
            $scope.form.contact = {};
            $scope.toggle.showPanel = false;
            // sometimes you'll be flipping around between new and edit
            // and 'editing' won't be reset to false, this will.
            if(editing !== false){
                editing = false;
            }
        },
        save = function (person) {
            // angular function to check one object against another one.
            // we do not want to allow an empty person to be saved.
            if (!angular.equals({}, person)) {
                // at this point, if we're editing, edit will have an index from the array.
                if (editing !== false) {
                    addressArray[editing] = person;
                    editing = false; // make sure this is set back for future edits
                } else {
                    addressArray.push(person);
                }
            }
        },
        editing = false;

    $scope.sortField = 'firstname';
    // this is used as a collection object. parent/child type of setup.
    $scope.form = {
        contact: {}
    };
    // this is used as just an object to hold page use fields.
    $scope.toggle = {
        caretOne: false,
        caretTwo: false,
        caretThree: false,
        reverse: false,  // variable which will flip column toggles up and down.
        displayType: 'list',
        showPanel: false
    };

    $scope.swapViews = function (type) {
        $scope.toggle.displayType = type;
    };

    $scope.showAddPanel = function () {
        editing = false;
        $scope.form.contact = {};
        $scope.toggle.showPanel = true;
        $scope.actionType = 'Add New Contact'

    };

    $scope.savePerson = function (person) {
        save(person);
        resetForm();
    };

    $scope.edit = function (editPerson) {
        // flip from false to the index of the person you want to edit.
        editing = addressArray.indexOf(editPerson);
        // by copying you're getting around bound editing.
        // i.e, you wont' see the words in the table change while typing in the form.
        $scope.form.contact = angular.copy(editPerson);
        $scope.toggle.showPanel = true;
        $scope.actionType = 'Edit ' + editPerson.firstname + ' ' + editPerson.lastname;
    };

    $scope.remove = function (deletePerson) {
        var index = addressArray.indexOf(deletePerson);
        addressArray.splice(index, 1);
        resetForm();
    };

    $scope.cancel = function () {
        resetForm();
    };
});
