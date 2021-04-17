// Importing necessary packages
const mongoose = require("mongoose");
const Joi = require('joi');

// Creating a model
const Notes = mongoose.model("Note", mongoose.Schema({
    desc: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 400
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}));

// Create a joi validation schema function
function validateNote(note) {
    const schema = Joi.object({
        desc: Joi.string().min(10).max(400).required(),
    });
    return schema.validate(note);
}


exports.Notes = Notes;
exports.validateNote = validateNote;