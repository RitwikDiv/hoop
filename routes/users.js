// Importing necessary packages
const express = require('express');
const Joi = require('joi');
const mongoose = require("mongoose");
const { User, validateUser } = require("../models/user.js");
const _ = require("lodash");
const bcrypt = require("bcrypt");

// Setting up environment variables
require("dotenv").config();

// Initializing router
const router = express.Router();

// _.pick from array
function project(...properties) {
    return function project(object, index, array) {
        return _.pick(object, ...properties);
    };
}

// API Routes
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(_.map(users, project("_id", "name", "email")));
    } catch (err) {
        res.status(500).send("Server error during query");
    }
});

router.get('/:id', async (req, res) => {
    try {

    } catch (err) {

    }
});

router.post('/', async (req, res) => {
    try {
        const { error } = validateUser(_.pick(req.body, ["name", "email", "password"]));
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered.');

        user = new User(_.pick(req.body, ["name", "email", "password"]));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);
        await user.save();

        const token = user.generateAuthToken();
        res.header('x-auth-token',token).send(_.pick(user, ["_id", "name", "email"]));
    } catch (err) {
        res.status(500).send("Server error during registration");
    }
});

router.put('/:id', async (req, res) => {
    try {

    } catch (err) {

    }
});

module.exports = router;