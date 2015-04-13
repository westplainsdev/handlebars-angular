chanceApp.controller('chance.mailController', function($scope, $http){

    var mailMessage = {};
    $scope.isSubmitted = false;

    var sendMail = function(){

        var data = {
            mailMessage: mailMessage
        }

        $http.post('/api/mail/send', data).success(function(response){
            $scope.pageMesage = response;
        });
    }

    $scope.submitEmail = function(){
        mailMessage = $scope.message;
        $scope.message = {};
        $scope.isSubmitted = true;
        $scope.sentMessage = mailMessage;
        sendMail();
    }

    $scope.reset = function(){
        mailMessage = {};
        $scope.isSubmitted = false;
        $scope.sentMessage = {};
    }

});