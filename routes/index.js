var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	index : 'active',
  	title : 'Welcome!',
  	body : 'I am a student studying Software Engineering at ' +
  		   'Western. Explore my website to learn more about me!'
  });
});

module.exports = router;
