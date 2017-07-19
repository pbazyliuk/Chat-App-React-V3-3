const Message = require('../models/message');

exports.getAllMessages = function(req, res) {
	Message.find({}, function(err, messages) {
		console.log(messages);
		if (err) return err;
		res.send(messages);
	});
};

exports.createMessage = function(req, res) {
	console.log(req.body);
	Message.create(req.body, function(err, message) {
		if (err) return err;

		// console.log(message);
		res.send(message);
	});
};
