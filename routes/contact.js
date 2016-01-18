var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
  	contact : 'active',
  	title : 'Contact Information',
  	header : 'Contact Information',
  	address : [
  		"RR#2 1253 Concession 4",
  		"Teeswater, Ontario",
  		"N0G 2S0"
  	],
  	phones : [{
  		type : "Cell",
  		number : "(519) 357-8741"
  	},
  	{
  		type : "Home",
  		number : "(519) 392-6106"
  	}],
  	emails : [
  		"tgfischer6@gmail.com"
  	]
  });
});

module.exports = router;
