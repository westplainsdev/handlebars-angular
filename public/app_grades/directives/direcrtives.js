gradesApp.directive('focusMe', function() {
    return {
        link: function(scope, element, attrs) {
            scope.$watch(attrs.focusMe, function(value) {
                if (value === true) {
                    element[0].focus();
                    scope[attrs.focusMe] = false;
                }
            });
        }
    };
});

gradesApp.directive('gradecheck', function() {
    return {
        restrict: 'A',
        scope: {
            model: '=gradecheck'
        },
        link: function(scope, element) {
            scope.$watch('model', function(grade) {
                if (grade < 65) {
                    // apply class
                    element.addClass('warning');

                } else {
                    element.removeClass('warning');
                }
            });
        }
    };
});