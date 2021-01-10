const express = require('express');
const router = express.Router();
const Verse = require('../models/Verse');

router.get('/', (req, res) => {
	Verse.find({}).then((allVerses) => {
		res.json(allVerses);
	});
});

router.post('/', (req, res) => {
	Verse.create(req.body).then((Verse) => res.json(Verse));
});

module.exports = router;
