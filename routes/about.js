var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', {
  	about : 'active',
  	title : 'About Tom Fischer',
  	header : 'About Tom Fischer'
  });
});

module.exports = router;
