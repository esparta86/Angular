var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : {type : String, default: ''},
	priority:{type: Number ,default:0},
	startDate:{ type: Date },
	endDate:{ type: Date }
});