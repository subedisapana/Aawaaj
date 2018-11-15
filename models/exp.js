var mongoose = require('mongoose');

const ExpSchema = mongoose.Schema({

	experience: String,
	Name: String,
	createDate:{
		type:Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Exp', ExpSchema)