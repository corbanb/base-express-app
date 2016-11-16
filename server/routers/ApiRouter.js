var paramparser = require('../helpers/ParamParser');
var userController = require('../controllers/UserController');
var msgController = require('../controllers/MessageController');

// this all extends /api/1.0/
module.exports = function (express, app) {
	var router = express.Router();
	router.use(function(request, response, next) {
		next();
	});

	router.get('/messages/:message_id', msgController.get);
	router.get('/messages', msgController.list);

	router.get('/users/:username/company', userController.getCompany);
	router.get('/users/:username', userController.get);
	router.get('/users', userController.list);
	return router;
};
