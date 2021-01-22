const mongoose = require('./connection');

const Verse = require('../models/Verse');

// const myFirstVerse = {
// 	body:
// 		'I feel like I am a fake. Why would anyone hire me to be a software engineer?',
// 	author: 'Joshua F',
// };

// const myNextVerse = {
// 	body: 'I am not ready. Maybe I will never be',
// 	author: 'Joshua F',
// };

// const anotherVerse = {
// 	body: 'I got this!',
// 	author: 'Joshua F',
// };

// const ronVerse = {
// 	body: 'I am in a glass cage of emotion!',
// 	author: 'Ron B',
// };

// Verse.create(myNextVerse, (error, verse) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(verse);
// 	}
// 	db.close();
// });

// Verse.deleteMany({})
// 	.then(() => {
// 		return Verse.collection.insertMany([myFirstVerse, myNextVerse, anotherVerse, ronVerse]);
// 	})
// 	.then(() => {
// 		process.exit();
// 	});

Verse.create.deleteMany({}).then(() => {
	console.log('deleted all verses');

	Verse.create({
		body:
			'I feel like I am a fake. Why would anyone hire me to be a software engineer?',
		author: 'Joshua F',
	})
		.then(() => {
			console.log('created verse 1');
		})
		.catch(() => {
			console.log('error');
		});

	Verse.create({
		body: 'I am not ready. Maybe I will never be',
		author: 'Joshua F',
	})
		.then(() => {
			console.log('created verse 2');
		})
		.catch(() => {
			console.log('error');
		});

	Verse.create({
		body: 'I got this!',
		author: 'Joshua F',
	})
		.then(() => {
			console.log('created verse 3');
		})
		.catch(() => {
			console.log('error');
		});

	Verse.create({
		body: 'I am in a glass cage of emotion!',
		author: 'Ron B',
	})
		.then(() => {
			console.log('created verse 4');
		})
		.catch(() => {
			console.log('error');
		});

	Verse.create({
		body: 'How do you like them apples?',
		author: 'Matt D',
	})
		.then(() => {
			console.log('created verse 5');
		})
		.catch(() => {
			console.log('error');
		});
});
