shopApp.factory('ShopFactory', function($http){

    return{
        loadProducts: function(){
            return $http.get('/api/shop/products');
        }
    }

});