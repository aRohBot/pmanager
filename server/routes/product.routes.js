const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/allproducts', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProductById);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProductById);
}

