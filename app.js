const mongoose = require('mongoose');
const Verse = require('./verse.js');

const mongoURI = 'mongodb://localhost:27017/' + 'verses';
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

const myFirstVerse = {
	body:
		'I feel like I am a fake. Why would anyone hire me to be a software engineer?',
	author: 'Joshua F',
};

Verse.create(myFirstVerse, (error, verse) => {
	if (error) {
		console.log(error);
	} else {
		console.log(verse);
	}
	db.close();
});
