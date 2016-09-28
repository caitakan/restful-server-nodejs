var mongoose = require("mongoose");

// create Schema
	var MovieSchema = new mongoose.Schema({
		title: {
			type : String,
			required: true
		},
		url : {
			type : String,
			required: true
		}
	});

//// Export Model Schema
	module.exports = MovieSchema;