var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Create a new express server
var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

/* Handle robots.txt so web crawlers can index the site
------------------------------------------------------ */
app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow:");
});

/* Set up the routes
------------------------------------------------------ */
var index = require('./routes/index');
var about = require('./routes/about');
var work = require('./routes/work');
var academics = require('./routes/academics');
var extracurriculars = require('./routes/extracurriculars');
var contact = require('./routes/contact');
var error = require('./routes/error');

app.use('/', index);
app.use('/about', about);
app.use('/work', work);
app.use('/academics', academics);
app.use('/extracurriculars', extracurriculars);
app.use('/contact', contact);
app.use(error);

/* Start the server
------------------------------------------------------ */
app.listen(app.get('port'), function() {
  console.log("server starting on " + app.get('port'));
});
