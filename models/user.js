// Importing necessary packages
const mongoose = require("mongoose");
const Joi = require('joi');
const jwt = require("jsonwebtoken");

// Setting up environment variables
require("dotenv").config();

const passwordComplexity = require("joi-password-complexity");
const complexityOptions = {
    min: 5,
    max: 250,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
};

// Creating a user model
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this.id}, process.env.HOOP_JWTPRIVATEKEY);
    return token;
};

const User = mongoose.model('User', userSchema);


// Create a joi validation schema function
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: passwordComplexity(complexityOptions)
    });
    return schema.validate(user);
}


exports.User = User;
exports.validateUser = validateUser;
exports.passwordComplexity = passwordComplexity;
exports.complexityOptions = complexityOptions;