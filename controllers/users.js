const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
	User.find({}).then((allUsers) => {
		res.json(allUsers);
	});
});

router.post('/', (req, res) => {
	User.create(req.body).then((User) => res.json(User));
});

module.exports = router;
