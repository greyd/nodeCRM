var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

	req.models.user.find({}, function (err, user) {
		if(err) {
			console.log(err)
			/*if(Array.isArray(err)) {
				return res.send(200, { errors: helpers.formatErrors(err) });
			} else {
				return next(err);
			}*/
		}

		return res.json(user);
	});
  //res.end('user');
});

module.exports = router;
