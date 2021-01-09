const express = require('express');
const app = express();

const verseController = require('./controllers/verse');

app.use(verseController);

const Verse = require('./models/Verse');

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('Verses app listening on port ${port}');
});
