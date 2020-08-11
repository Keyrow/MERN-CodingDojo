const controller = require('../controllers/product.controller');

module.exports = function(app){
    //Read Routes --> app.get
    app.get('/api/products', controller.allProducts);
    app.get('/api/products/:id', controller.oneProduct);
    //Create Routes --> app.post
    app.post('/api/products', controller.newProduct);
    // Update Routes --> app.patch
    app.put('/api/products/:id', controller.editProduct);
    // Delete Routes --> app.delete
    app.delete('/api/products/:id', controller.deleteProduct);
}