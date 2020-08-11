const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    type: {
        type: String,
        required: [true, "Pet type is required."],
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Pet description is required."]
    },
}, { timestamps: true });

const Pet = new mongoose.model("Pet", PetSchema);

module.exports = Pet