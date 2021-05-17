// Importing necessary packages
const mongoose = require('mongoose');
const Joi = require('joi');

// Creating a model
const Memory = mongoose.model(
	'Memory',
	mongoose.Schema({
		title: {
			type: String,
			required: true,
			trim: true,
			minLength: 2,
			maxLength: 50,
		},
		desc: {
			type: String,
			required: true,
			minLength: 10,
			maxLength: 500,
		},
		place_name: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 50,
		},
		loc: {
			type: {
				type: String,
				default: 'Point',
			},
			coordinates: {
				type: [Number],
				default: [0, 0],
			},
		},
		date: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		created_at: {
			type: Date,
			default: Date.now,
		},
	})
);

// Create a joi validation schema function
function validateMemory(memory) {
	const schema = Joi.object({
		title: Joi.string().min(2).max(50).required(),
		desc: Joi.string().min(10).max(500).required(),
		place_name: Joi.string().min(1).max(50).required(),
		date: Joi.string().required(),
	});
	return schema.validate(memory);
}

exports.Memory = Memory;
exports.validateMemory = validateMemory;
