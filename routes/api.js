// SINGLE PAGE APPLICATION API ENDPOINTS

module.exports = {
    register: function(app) {

        app.get('/api/shop/products', function (req, res ){

            var productList = [
                { sku: 'A12B', brand: 'House Brand', description: 'Rice and Beans', price: 1.99},
                { sku: 'B23C', brand: 'Best Choice', description: 'Honey Nut Oatmeal', price: 2.49},
                { sku: 'C34D', brand: 'Value Brand', description: 'Real meat by product hot dogs', price: 5.29},
                { sku: 'D45F', brand: 'Cheap as Dirt', description: 'Strawberry Soda 6 Pack', price: 4.59}
            ];

            res.send(productList);

        });

        app.get('/api/address/contacts', function (req, res){
            var contactList = [
                {firstname: 'Bob', lastname: 'Jones', citystate: 'Seattle, WA'},
                {firstname: 'Sandy', lastname: 'Roberts', citystate: 'Portland, OR'},
                {firstname: 'Larry', lastname: 'Walker', citystate: 'San Francisco, CA'},
                {firstname: 'Adrian', lastname: 'Parker', citystate: 'Las Vegas, NV'},
                {firstname: 'Tony', lastname: 'Calvin', citystate: 'Chicago, IL'}
            ];
            
            res.send(contactList);
        });
    }
};