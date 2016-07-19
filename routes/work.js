var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('work', {
  	work : 'active',
  	title : 'Work Experience',
  	header : 'Work Experience',
  	experience : [{
  		company : 'IBM',
  		subtitle : '// 2015-2016',
  		website : 'http://www.ibm.com/ca-en/',
  		description : 'I interned at IBM in Markham, Ontario from May 2015 to August 2016. During this time, I was a Software Developer, mainly working on front end work, and automated testing. I was also one of the Future Blue Web Team leads, where I managed and oversaw several web-based applications',
  		logo : '/images/ibm-logo.jpg',
  		projects : [{
  			header : 'Business Process Manager',
  			body : 'During my time at IBM, I was a software developer for Business Process Manager. In particular, I worked on the Playback component of Process Designer. I learned many new skills, specifically with the Selenium and Dojo frameworks, along with Apache Ant for automating build processes.'
  		},
      {
        header : 'Future Blue Canada Website',
        body : 'From September 2015 to August 2016, I was one of the Future Blue Web Team leads. The main project that I led was a new Future Blue Canada website. I managed between 6-8 students to help with development using Jazz DevOps, with weekly scrums meetings. The website was developed using NodeJS, EJS, and MySQL.'
      }],
  		skills : [
  			[ 'Java', 'HTML', 'Javascript', 'Dojo', 'CSS' ],
  			[ 'JUnit', 'Selenium', 'Apache Ant', 'NodeJS', 'Express' ],
  			[ 'EJS', 'MySQL', 'GWT', '', '' ]
  		]
  	},
  	{
  		company : 'Huron Geomatics Inc.',
  		subtitle : '// 2011-2014',
  		website : 'http://www.hurongeomatics.com/',
  		description : 'Huron Geomatics Inc. is a company based in Wingham, Ontario that specializes in GIS services, project management, IT consulting and application development. Some of the services that it advertises are Mobile LiDAR Mapping, 3D Laser Scanning, UAV Aerial Mapping and GPS/GIS Mapping. My role at Huron Geomatics Inc. was to create various applications for clients, as well as design and produce websites.',
  		logo : '/images/huron-geomatics.png',
  		projects : [{
  			header : 'Smart Meter Analytic Application',
  			body : 'This application took a directory of massive attribute-centric XML files, parsed them using C#, and inserted the data to a SQL Server database. This process was automated, such that every day the application would check the directory for new XML files. The data in the database could then be queried and visualized with line graphs.'
  		},
  		{
  			header : 'Automatic Panorama Stitcher',
  			body : ' Every ten feet, a vehicle would take three photos from its roof, which could align into a panorama. My task was to stitch these panoramas automatically when given a directory full of corresponding .AVI files. I created an application what would extract each frame from the .AVI files, and same them into directories (depending on which .AVI it was extract from). Once three corresponding frames were extracted, I created a new PTGui project file with using a template I created. I would then push the new project to the PTGui batch stitcher, where it would stitch the panorama.'
  		},
  		{
  			header : 'Ontario One Call Form',
  			body : 'This application automatically inserted data from .DBF files into a SQL Server, at a set interval. This data involved applications for permits. A user could view/edit/delete the data from the database, and generate new reports for queried results. This application also had a feature that would automatically print the permit request when it was added to the database. This feature could be turned on and off.'
  		}],
  		skills : [
  			[ 'C#', 'SQL', 'LINQ', 'Microsoft Access', 'Microsoft SQL Server' ],
  			[ 'Java', 'HTML', 'CSS', 'JavaScript', 'Wordpress' ]
  		]
  	},]
  });
});

module.exports = router;
