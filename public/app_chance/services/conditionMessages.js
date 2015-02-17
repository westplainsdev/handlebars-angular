chanceApp.service('ConditionMessage', function(){
    return {
        set: function(condition){

            var infoMessage = {
                isError: false,
                isWarning: false,
                informationMessage: 'Life is good.'
            }

            switch(condition) {
                case 'error':
                    infoMessage.isError = true;
                    infoMessage.isWarning = false;
                    infoMessage.informationMessage = 'Error, error!';
                    break;
                case 'warning':
                    infoMessage.isWarning = true;
                    infoMessage.isError = false;
                    infoMessage.informationMessage = 'Warning Wil Robinson!';
                    break;
                default:
                    return infoMessage;
                    break;
            }
            return infoMessage;

        }
    }
});