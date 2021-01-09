const mongoose = require('../db/connection');

const VerseSchema = new mongoose.Schema(
	{
		body: String,
		author: String,
	},
	{ timestamps: true }
);

const Verse = mongoose.model('Verse', VerseSchema);

module.exports = Verse;