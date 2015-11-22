shopApp.controller('shop.checkoutController', function($scope, CheckOutService){

    var cart = CheckOutService.getCart();

    $scope.cartDisplay = cart;
    $scope.paymentMade = false;

    $scope.payNow = function(){
        $scope.paymentMade = true;
    };

});