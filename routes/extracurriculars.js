var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('extracurriculars', {
		extracurriculars : 'active',
		title : 'Extracurriculars',
		header : 'Extracurriculars',
		activities : [{
            activity : 'IBM Recreational Sports',
			date : '2015 - Present'
        },
        {
			activity : 'Belmore Jr. Stingers Fastball',
			date : '2010 - Present'
		},
		{
			activity : 'O.A.S.A. Provincial Baseball',
			date : '2002 - 2014'
		},
		{
			activity : 'University Recreational Sports',
			date : '2012 - 2014'
		},
		{
			activity : 'O.A.S.A Skills Development Camps for Team Ontario Fastball',
			date : '2009 - 2013'
		},
		{
			activity : 'W.O.A.A. Minor Hockey',
			date : '1998 - 2012'
		},
		{
			activity : 'W.O.A.A. Minor Baseball',
			date : '1998 - 2012'
		},
		{
			activity : 'F.E. Madill Secondary School Swim Team',
			date : '2008 - 2012'
		},
		{
			activity : 'F.E. Madill Secondary School Badminton Team',
			date : '2009 - 2012'
		},
		{
			activity : '4-H Beef and Fishing Clubs',
			date : '2006 - 2008'
		}],
		community : [{
			activity : 'Owen Wright Memorial Fastball Volunteer',
			date : '2012 - 2015'
		},
		{
			activity : 'Engineering Shadow Day Volunteer',
			date : '2013'
		},
		{
			activity : 'Western Leadership Conference',
			date : '2012'
		},
		{
			activity : 'Shinerama Volunteer',
			date : '2012'
		},
		{
			activity : 'W.O.A.A. Minor Hockey Trainer',
			date : '2009 - 2012'
		},
		{
			activity : 'Guest Speaker at Various Event (Including National 4-H Conference)',
			date : '2007 - 2008'
		},
		{
			activity : '4-H Volunteer',
			date : '2006 - 2008'
		}],
		awards : [{
			award : 'U21 Canadian Fastball Participant (Stratford Cubs)',
			date : '2014'
		},
		{
			award : 'Claude Deschamps Softball Canada',
			date : '2013'
		},
		{
			award : 'Walker Woods Foundation Award',
			date : '2013'
		},
		{
			award : 'U21 Legends of Fastball Finalists (Wiarton Red Devils)',
			date : '2013'
		},
		{
			award : 'Ethel Boyce Achievement Award',
			date : '2012'
		},
		{
			award : 'U21 Canadian Fastball Participant (Wiarton Red Devils)',
			date : '2012'
		},
		{
			award : 'Ontario Amateur Softball Award',
			date : '2012'
		},
		{
			award : 'Ontario Hockey Federation Award',
			date : '2012'
		},
		{
			award : 'Burnside Engineering Award',
			date : '2012'
		},
		{
			award : 'Bruce Power Scholarship',
			date : '2012'
		},
		{
			award : 'Drayton Theatre Sports and Scholarship Award',
			date : '2012'
		},
		{
			award : 'Western Entrance Award of Distinction',
			date : '2012'
		},
		{
			award : 'Computer Science Proficiency Award',
			date : '2011'
		},
		{
			award : 'O.A.S.A. Eastern Canadian Fastball Champions (Wingham Falcons)',
			date : '2009'
		},
		{
			award : 'Royal Canadian Legion Public Speaking Champion',
			date : '2008'
		},
		{
			award : 'Canadian Young Speaker for Agriculture Champion',
			date : '2007'
		}]
  	});
});

module.exports = router;
