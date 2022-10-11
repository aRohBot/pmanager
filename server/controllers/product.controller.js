const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct =>res.json(newProduct))
        .catch(err =>res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products)
            res.json(products)
        }).catch((err)=>{
            console.log(err)
            res.json(err)
        })
}