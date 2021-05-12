// Importing necessary packages
const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const axios = require('axios');
const { Memory, validateMemory } = require('../models/memory');
const _ = require('lodash');

// Initializing router
const router = express.Router();

// API Routes
router.get('/', auth, async (req, res) => {
	try {
		const memories = await Memory.find({
			author: mongoose.Types.ObjectId(req.user._id),
		});
		res.send(memories);
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

router.get('/:id', auth, async (req, res) => {
	try {
		const memory = await Memory.findById(req.params.id);
		if (!memory) return res.status(404).send('Memory not found');
		res.send(memory);
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

router.post('/', auth, async (req, res) => {
	try {
		let place_name = 'Unspecified';
		let loc = {
			type: 'Point',
			coordinates: [0, 0],
		};
		let date = new Date(req.body.date);

		const { error } = validateMemory(
			_.pick(req.body, ['title', 'desc', 'place_name', 'date'])
		);
		if (error) return res.status(400).send(error.details[0].message);

		const locationString = encodeURIComponent(req.body.place_name);
		const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationString}.json?limit=1&access_token=${process.env.MAPBOX_API_KEY}`;
		console.log(geocodeUrl);
		axios
			.get(geocodeUrl)
			.then(async (axiosResponse) => {
				place_name = axiosResponse.data.features[0].text;
				loc.coordinates = axiosResponse.data.features[0].center;
				const memory = new Memory({
					title: req.body.title,
					desc: req.body.desc,
					place_name: place_name,
					loc: loc,
					author: mongoose.Types.ObjectId(req.user._id),
					date: date,
				});
				await memory.save();
				res.send(memory);
			})
			.catch(() => {
				res.status(500).send('Internal error when creating the memory');
			});
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const memory = await Memory.findByIdAndDelete(req.params.id);
		if (!memory) return res.status(404).send(`Memory could not be found`);
		res.send(memory);
	} catch (err) {
		res.status(500).send('Internal server error');
	}
});

module.exports = router;
