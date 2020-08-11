const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    price: {
        type: Number,
        required: [true, "Numerical price is required."],
        min: [0, "Price cannot be a negative, C'mon man."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
}, { timestamps: true });

const Product = new mongoose.model("Product", ProductSchema);

module.exports = Product



