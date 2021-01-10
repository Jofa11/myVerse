const express = require('express');
const app = express();
const cors = require('cors');

const verseController = require('./controllers/verse');
const userController = require('./controllers/user');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/verses', verseController);
app.use('/users', userController);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
