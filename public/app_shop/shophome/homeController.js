shopApp.controller('shop.homeController', function($scope, $state, ShopFactory, CheckOutService){
    $scope.message = "Product Listing";

    var taxrate = .07, tax = 0;

    var cart = {
        productCollection: [],
        subTotal: 0,
        total: 0
    };

    var load = function(){
        ShopFactory.loadProducts().then(function(response) {
            $scope.productList = response.data;
        });
    };

    $scope.sortField = 'brand';

    $scope.addToCart = function(product){

        var item = angular.copy(product);

        cart.productCollection.push(item);
        cart.subTotal =  cart.subTotal + item.price;
        tax = cart.subTotal * taxrate;
        cart.total = cart.subTotal + tax;

        $scope.cartDisplay = cart;

    };

    $scope.removeFromCart = function(product){
        var index = cart.productCollection.indexOf(product);

        cart.subTotal =  cart.subTotal - product.price;
        tax = cart.subTotal * taxrate;
        cart.total = cart.subTotal + tax;

        cart.productCollection.splice(index, 1);

        $scope.cartDisplay = cart;
    };

    $scope.checkout = function(){
        CheckOutService.setCart(cart);
        $state.go('checkout');
    };

    load();

});