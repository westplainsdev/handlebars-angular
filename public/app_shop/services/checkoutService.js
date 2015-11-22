shopApp.service('CheckOutService', function(){

    var cart = {};

    return {
            setCart: function(pushedCart){
                cart = pushedCart;
            },

            getCart: function(){
              return cart;
            }
    }

});