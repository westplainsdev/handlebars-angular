gradesApp.controller('grades.homeController', function ($scope, $log, CalculationService, ValidationService) {

    var studentCollection = [],
        gradesCollection = [],

        resetPage = function () {
            gradesCollection = [];
            studentCollection = [];
            setPageDefaults();
        },

        setPageDefaults = function () {
            $scope.overall = {high: 0, avg: 0, min: 0};
            $scope.student = {name: '', grade: 0};
            $scope.inputs = {nameError: false, gradeError: false};
            $scope.studentCollection = studentCollection;
            $scope.gradesCollection = gradesCollection;
        };

    $scope.addGrade = function () {
        $scope.inputs = ValidationService.validateOnAddingGrade($scope.student, $scope.inputs);

        if (!$scope.inputs.nameError && !$scope.inputs.gradeError) {

            var capturedGrade = parseInt($scope.student.grade),
                capturedStudent = $scope.student;

            studentCollection.push(capturedStudent);
            gradesCollection.push(capturedGrade);

            $scope.overall = CalculationService.calculateScores(gradesCollection);
            $scope.student = {name: '', grade: 0};
            $scope.studentCollection = studentCollection;
            $scope.inputs = {nameError: false, gradeError: false};
        }
    };

    $scope.updateCollections = function (data) {
        var index = studentCollection.indexOf(data),
            capture = data;

        studentCollection[index] = capture;
        gradesCollection[index] = parseInt(capture.grade);
        $scope.overall = CalculationService.calculateScores(gradesCollection);
        $scope.studentCollection = studentCollection;
    };

    $scope.removeStudent = function(rowToRemove){
        var index = studentCollection.indexOf(rowToRemove);
        studentCollection.splice(index, 1);
        gradesCollection.splice(index, 1);
        if(gradesCollection.length > 0){
            $scope.overall = CalculationService.calculateScores(gradesCollection);
        } else {
            resetPage();
        }
    };


    $scope.resetAll = function () {
        resetPage();
    };

    $scope.checkName = function (name) {
        return ValidationService.validateName(name);
    };

    $scope.checkGrade = function (grade) {
        return ValidationService.validateGrades(grade);
    };

    setPageDefaults();

});
