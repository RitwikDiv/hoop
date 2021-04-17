// Importing necessary packages
const express = require('express');
const Joi = require('joi');
const mongoose = require("mongoose");

// Initializing router
const router = express.Router();
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('content-type', 'text/plain');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// API Routes
router.get('/', async (req, res) => {
    try {

    } catch (err) {

    }
});

router.get('/:id', async (req, res) => {
    try {

    } catch (err) {

    }
});

router.post('/', async (req, res) => {
    try {

    } catch (err) {

    }
});

router.put('/:id', async (req, res) => {
    try {

    } catch (err) {

    }
});

router.delete('/:id', async (req, res) => {
    try {

    } catch (err) {

    }
});

module.exports = router;