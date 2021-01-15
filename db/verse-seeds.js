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

const anotherVerse = {
    body: 'I got this!',
    author: 'Joshua F',
};

const ronVerse = {
    body: 'I am in a glass cage of emotion!',
    author: 'Ron B',
}

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
		return Verse.collection.insertMany([myFirstVerse, myNextVerse, anotherVerse, ronVerse]);
	})
	.then(() => {
		process.exit();
	});
