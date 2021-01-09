const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verseSchema = new Schema(
	{
		body: String,
		author: String,
	},
	{ timestamps: true }
);

const Verse = mongoose.model('Verse', verseSchema);

module.exports = Verse;