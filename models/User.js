const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
	},
	{ timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
