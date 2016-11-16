var _ = require('lodash');
var database = require('../data/database');

module.exports = {
	list (request, response, next) {
		var messages = database.messages;
		var users = database.users;

		_.each(messages, function(message){
			message.sender = _.find(users, ['id', message.sender]);
			message.recipient = _.find(users, ['id', message.recipient]);
		});

		response.json(messages);
	},
	get (request, response, next) {
		var message_id = parseInt(request.params.message_id);
		var message = _.find(database.messages, ['id', message_id]);
		console.log('message', message);
		var users = database.users;

		if (!message) return response.status(404).json({ msg: 'Message not found.'});

		message.sender = _.find(users, ['id', message.sender]);
		message.recipient = _.find(users, ['id', message.recipient]);
		response.json(message);
	},
};
