const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
	User.find({}).then((allUsers) => {
		res.json(allUsers);
	});
});

router.get('/:email', (req, res) => {
	const userEmail = req.params.email;
	User.findOne({ email: userEmail }).then((user) => {
		res.json(user);
	});
});

router.post('/', (req, res) => {
	User.create(req.body).then((User) => res.json(User));
});

router.put('/:email', (req, res) => {
	User.findOneAndUpdate({ email: req.params.email }, req.body).then(
		(prevRecord) => {
			res.json(prevRecord);
		}
	);
});

router.delete('/:email', (req, res) => {
	User.findOneAndDelete({ email: req.params.email }).then((deleted) => {
		res.json(deleted);
	});
});

module.exports = router;
