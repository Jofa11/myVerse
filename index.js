const express = require('express');
const app = express();

const verseController = require('./controllers/verse');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/verses', verseController);

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('Verses app listening on port ${port}');
});
