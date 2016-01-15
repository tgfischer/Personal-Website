var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	res.status(404);
	var message = 'It looks like we cannot find the page you are looking for :('

	// respond with html page
	if (req.accepts('html')) {
		res.render('error', {
			message : message
		});

		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({ 
			error: message
		});

		return;
	}

	// default to plain-text. send()
	res.type('txt').send(message);
});

module.exports = router;