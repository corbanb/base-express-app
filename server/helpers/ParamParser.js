exports.foo = function(req, res, next, val) {
	console.log('foo middleware', val);
	return next();
};
