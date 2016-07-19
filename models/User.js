'use strict';

exports = module.exports = function(app) {
	var userModel = [];
	userModel.defaultReturnUrl = function() {
		var returnUrl = '/';
		/*if (this.canPlayRoleOf('account')) {
			returnUrl = '/account';
		}

		if (this.canPlayRoleOf('admin')) {
			returnUrl = '/admin';
		}*/

		return returnUrl;
	};
	userModel.encryptPassword = function(password, done) {
		var bcrypt = require('bcrypt');
		bcrypt.genSalt(10, function(err, salt) {
			if (err) {
				return done(err);
			}

			bcrypt.hash(password, salt, function(err, hash) {
				done(err, hash);
			});
		});
	};
	userModel.validatePassword = function(password, hash, done) {
	    var bcrypt = require('bcrypt');
	    bcrypt.compare(password, hash, function(err, res) {
	    	done(err, res);
	    });
	};
	app.models.User = userModel;
}