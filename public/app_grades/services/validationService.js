gradesApp.service('ValidationService', function(){
    var errors = {
        nameEmpty: 'Name must not be empty',
        gradeNaN: 'Grade must be a number',
        gradeOutOfRange: 'Grades be between 100 and 0'
    };

    return {

        validateGrades: function (data) {
            var number = parseInt(data),
                isNumber = isFinite(number);
            if (!isNumber) {
                return errors.gradeNaN;
            }

            if (number > 100 || number < 0) {
                return errors.gradeOutOfRange;
            }
        },

        validateName: function (data) {
            if (data === '') {
                return errors.nameEmpty;
            }
        },

        validateOnAddingGrade: function(checkValues, inputs){
            // We're going to be very explicit in setting T/F values here.

            if (checkValues.name.length === 0) {
                inputs.nameError = true;
            } else {
                inputs.nameError = false;
            }
            var anyGradeErrors = this.validateGrades(checkValues.grade);

            // this is a funky error check. anyGradeErrors will have text in it
            // if valid, otherwise it will be undefined. Wanted to reuse the existing
            // function of validateGrades()
            if (anyGradeErrors !== undefined) {
                inputs.gradeError = true;
            } else {
                inputs.gradeError = false;
            }

            return inputs;
        }
    };
});