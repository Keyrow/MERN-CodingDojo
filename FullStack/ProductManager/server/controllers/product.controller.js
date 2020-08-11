const Product = require('../models/product');

module.exports = {
    // Read Methods
    allProducts: (req, res) => {
        Product.find({})
            .then(products => res.json({ message: "success", results: products }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    oneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(product => res.json({ message: "success", results: product }))
            .catch(err => res.json({ message: "errors", results: err }));
    },
    //Create Methods --> app.post
    newProduct: (req, res) => {
        Product.create(req.body)
            .then(product => res.json({ message: "success", results: product }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // Update Methods -->app.patch
    editProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(product => res.json({ message: "success", results: product }))
            .catch(err => res.json({ message: "error", results: err }))
    },
    // Delete Methods --> app.delete
    deleteProduct: (req, res) => {
        Product.findOneAndDelete({ _id: req.params.id })
            .then(product => res.json({ message: "success", results: product }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}