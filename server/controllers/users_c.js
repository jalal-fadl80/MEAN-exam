var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res) {

			User.findOne({name: req.body.name}, function(err, results) {
				if(!results) {
					var user = new User({name: req.body.name});
					user.save(function (err, results) {
						if (err) {return handleError(err);}
						else {
							res.json(results);
						}
					})
				}
				else{
					res.json(results);
				}
			});

			
		}
	}
})();