const mongoose = require('mongoose');
const Verse = require('../models/Verse.js');

const mongoURI = 'mongodb://localhost/verses';
const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('MongoDB connected on: ', mongoURI));
db.on('disconnected', () => console.log('MongoDB disconnected'));

mongoose.connect(
	mongoURI,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('connection with MongoDB is established');
	}
);

module.exports = mongoose;