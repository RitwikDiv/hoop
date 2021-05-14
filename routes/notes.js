// Importing necessary packages
const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const { Notes, validateNote } = require('../models/note');
const _ = require('lodash');

// Initializing router
const router = express.Router();

// API Routes
router.get('/', auth, async (req, res) => {
	try {
		const notes = await Notes.find({
			author: mongoose.Types.ObjectId(req.user._id),
		});
		res.send(notes);
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

router.get('/:id', auth, async (req, res) => {
	try {
		const note = await Notes.findById(req.params.id);
		if (!note) return res.status(404).send('Note not found');
		res.send(note);
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

router.post('/', auth, async (req, res) => {
	try {
		const { error } = validateNote(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		const note = new Notes({
			desc: req.body.desc,
			author: mongoose.Types.ObjectId(req.user._id),
		});
		await note.save();
		res.send(note);
	} catch (err) {
		console.log(err);
		res.status(500).send('Internal server error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const note = await Notes.findByIdAndDelete(req.params.id);
		if (!note) return res.status(404).send(`Note could not be found`);
		res.send(note);
	} catch (err) {
		res.status(500).send('Internal server error');
	}
});

module.exports = router;
