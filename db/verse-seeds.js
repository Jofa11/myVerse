const Verse = require('../models/Verse');

const myFirstVerse = {
	body:
		'I feel like I am a fake. Why would anyone hire me to be a software engineer?',
	author: 'Joshua F',
};

const myNextVerse = {
	body: 'I am not ready. Maybe I will never be',
	author: 'Joshua F',
};

// Verse.create(myNextVerse, (error, verse) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(verse);
// 	}
// 	db.close();
// });

Verse.deleteMany({})
	.then(() => {
		return Verse.collection.insertMany([myFirstVerse, myNextVerse]);
	})
	.then(() => {
		process.exit();
	});
