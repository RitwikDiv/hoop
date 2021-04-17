// Importing necessary packages
const express = require('express');
const Joi = require('joi');
const mongoose = require("mongoose");
const { User, passwordComplexity, complexityOptions } = require("../models/user.js");
const _ = require("lodash");
const bcrypt = require("bcrypt");

// Initializing router
const router = express.Router();

// Auth Validation
function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: passwordComplexity(complexityOptions)
    });
    return schema.validate(req);
}

// API Routes
router.post('/', async (req, res) => {
    try {
        const { error } = validate(_.pick(req.body, ["email", "password"]));
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('Invalid User/Password');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send("Invalid User/Password");
        
        const token = user.generateAuthToken();

        res.send(token);
    } catch (err) {
        res.status(500).send("Server error during authentication");
    }
});

module.exports = router;