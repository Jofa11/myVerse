const express = require('express');
const router = express.Router();
const Verse = require('../models/Verse');

router.get('/', (req, res) => {
	Verse.find({}).then((allVerses) => {
		res.json(allVerses);
	});
});

router.get('/:id', (req, res) => {
	Verse.findOne({ _id: req.params.id }).then((Verse) => res.json(Verse));
});

router.post('/', (req, res) => {
	Verse.create(req.body).then((Verse) => res.json(Verse));
});

router.delete('/:id', (req, res) => {
	// use id as a param to find the record we want to remove
	Verse.findOneAndDelete({ _id: req.params.id }).then((verse) => {
		// send back the deleted document
		res.json(verse);
	});
});

module.exports = router;
