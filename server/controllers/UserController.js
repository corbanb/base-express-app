var _ = require('lodash');
var database = require('../data/database');

module.exports = {
	list (request, response, next) {
		response.json(database.users);
	},
	get (request, response, next) {
		response.json(_.find(database.users, ['username', request.params.username]));
	},
	getCompany (request, response, next) {
		var user = _.find(database.users, ['username', request.params.username]);
		response.json(user.company);
	}
};
