const mongoose = require('mongoose');
const BlogPostSchema = require('./blogpost');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        // Validations
        required: [true, "Name is required."],
        minlength: [2, "Name must be at least 2 characters."],
        maxlength: [100, "Server space isn't free!"]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        minlength: [true, "Email must be at least 7 characters."],
        validate: {
            validator: function (v) {
                let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                // return regex test function if true or not
                return re.test(v)
            },
            message: "Invalid email address."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters in length."]
    },
    blogPosts: [BlogPostSchema]
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;