const mongoose = require('../db/connection');

const VerseSchema = new mongoose.Schema(
	{
		body: {
			_id: Number,
			type: String,
			required: true,
		},
		author: String,
	},
	{ timestamps: true }
);

const Verse = mongoose.model('Verse', VerseSchema);

module.exports = Verse;