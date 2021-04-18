// Importing necessary packages
const express = require('express');
const Joi = require('joi');
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

// Initializing router
const router = express.Router();

// API Routes
router.get('/', auth, async (req, res) => {
    try {

    } catch (err) {

    }
});

router.get('/:id', auth, async (req, res) => {
    try {

    } catch (err) {

    }
});

router.post('/', auth, async (req, res) => {
    try {

    } catch (err) {

    }
});

router.put('/:id', auth, async (req, res) => {
    try {

    } catch (err) {

    }
});

router.delete('/:id', auth, async (req, res) => {
    try {

    } catch (err) {

    }
});

module.exports = router;