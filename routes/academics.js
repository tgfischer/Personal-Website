var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('academics', {
		academics : 'active',
		title : 'Academics',
		header : 'Academics',
		projects : [{
			title : "Stock Market Application",
			paragraphs : [
				"This was a C# project that was completed in my Software Requirements and Analysis class. This application utilized the Observer pattern to show a real-time view of stock prices during the day. Users could input a bid or sell request, and the application would determine if a trade could be made. If a trade could be made, the frame with the list of companies would update with the companies new price.",

				"Note that this application did not involve actual stocks and companies. A list of companies were hard coded into the application, and this data could be manipulated at run time."
			]
		}, {
			title : "Multiplayer Tron",
			paragraphs : [
				"This was a C++ project that was completed in my Operating Systems Class. Tron is a game that is similar to snake, but it is two players. The goal of the game is to get the opposing player to crash into you, or the wall.",

				"Two clients would run the application in the console. These clients would establish a connection to a server with a dedicated IP address. Messages that contained information regarding the user's inputs were then send to the server. The server would do a collision check, and then return what each client should output.",

				"<a href=\"https://github.com/tgfischer/SE3313-Tron\" target=\"_blank\">Here is a link to the repository on my GitHub page</a>"
			]
		}, {
			title : "Space Invaders Application",
			paragraphs : [
				"This was a project that was completed in my Web Technologies class. This application utilized NodeJS, and was built using HTML, CSS, JavaScript, EJS, and MySQL. The main page had a game that was similar to Space Invaders, and used the Phasor.io framework. There was also a chatbox, highscores list, and a Google Heat Map (which showed where all the current players are located on a map).",

				"Users could also create an account and log in. This feature used PassportJS for authentication, and session management. The accounts were tied to each highscore and comment in the chatbox, and all were stored in a MySQL database."
			]
		}, {
			title : "Utility Meter Web Application",
			paragraphs : [
				"This was a project that was completed in my Database Management Systems class. This application utilized NodeJS, and was built using HTML, CSS, JavaScript, EJS, and MySQL. A partner and I designed a database for utility meters, and built a website on top of it. Users could log into the website, and view various statisitics from their meter. This included daily meter readings, and comparisons to others on a specific days. These databases went through all of the steps of normalization, and were modelled using ER diagrams before converting them to MySQL.",

				"For this project, we had to generate sample data for all tables. I created a script that could generate .CSVs for each table (1000 users, and all together about ~380000 records), in a second or two. These records all maintained relational integrity. The data from the .CSV files were then bulk imported to the database. <a href=\"https://github.com/tgfischer/SE3309-Assignment-4/tree/master/GENERATED%20DATA\" target=\"_blank\">The .CSVs are located here</a>",

				"<a href=\"https://github.com/tgfischer/SE3309-Assignment-4\" target=\"_blank\">Here is a link to the repository on my GitHub page</a>"
			]
		}, {
			title : "Pokemon Blackberry Application",
			paragraphs : [
				"This was a project that was completed in my Software Construction class. We were given a basic template for a Blackberry application, and we were tasked with populating a scrollable list with the names of all of the Pokemon. When the user clicks on a name, it would take them to a page which contained all of that Pokemon's information. All of this data was extracted from a .CSV file "
			]
		}],
		transcript : [{
			totalWeightedAverage : 84,
			courses : [{
				name : "Linear Algebra for Engineers",
				code : "APPLMATH 1411A",
				average : 91
			}, {
				name : "Applied Math for Engineers I",
				code : "APPLMATH 1413",
				average : 94
			}, {
				name : "General Chemistry",
				code : "CHEM 1024A",
				average : 68
			}, {
				name : "Properties of Materials",
				code : "ENGSCI 1021B",
				average : 88
			}, {
				name : "Engineering Statics",
				code : "ENGSCI 1022Y",
				average : 78
			}, {
				name : "Programming Fundamentals for Engineers",
				code : "ENGSCI 1036B",
				average : 90
			}, {
				name : "Introduction to Engineering Design and Innovation Studies",
				code : "ENGSCI 1050",
				average : 86
			}, {
				name : "An Introduction to Film Studies",
				code : "FILM 1020E",
				average : 78
			}, {
				name : "Physics for Engineering Students I",
				code : "PHYSICS 1401A",
				average : 83
			}, {
				name : "Applied Math for Engineers II",
				code : "PHYSICS 1402B",
				average : 78
			}]
		}, {
			totalWeightedAverage : 86,
			courses : [{
				name : "Applied Mathematical Methods I",
				code : "APPLMATH 2415",
				average : 80
			}, {
				name : "Information Systems and Design",
				code : "COMPSCI 1032B",
				average : 96
			}, {
				name : "Computer Science Fundamentals II",
				code : "COMPSCI 1037A",
				average : 83
			}, {
				name : "Introduction to Electrical Engineering",
				code : "ECE 2238B",
				average : 92
			}, {
				name : "Digital Logic Systems",
				code : "ECE 2277A",
				average : 86
			}, {
				name : "Engineering Communications",
				code : "ENGSCI 2211G",
				average : 84
			}, {
				name : "Discrete Structures for Engineers",
				code : "MATH 2151A",
				average : 70
			}, {
				name : "Software Design",
				code : "SE 2203B",
				average : 92
			}, {
				name : "Algorithms and Data Structures",
				code : "SE 2205B",
				average : 92
			}, {
				name : "Software Construction",
				code : "SE 2250A",
				average : 97
			}, {
				name : "Applied Probablity and Statistics for Engineers",
				code : "STATS 2141A",
				average : 81
			}]
		}, {
			totalWeightedAverage : 86,
			courses : [{
				name : "Microprocessors and Microcomputers",
				code : "ECE 3375B",
				average : 89
			}, {
				name : "Networking",
				code : "ECE 4436A",
				average : 88
			}, {
				name : "Database Management Systems",
				code : "SE 3309A",
				average : 84
			}, {
				name : "Theoretical Foundations of Software Engineering",
				code : "SE 3310B",
				average : 88
			}, {
				name : "Operating Systems for Engineers",
				code : "SE 3313A",
				average : 82
			}, {
				name : "Networking Applications",
				code : "SE 3314B",
				average : 90
			}, {
				name : "Web Technologies",
				code : "SE 3316A",
				average : 85
			}, {
				name : "Software Engineering Design I",
				code : "SE 3350Y",
				average : 88
			}, {
				name : "Software Project and Process Management",
				code : "SE 3351B",
				average : 82
			}, {
				name : "Software Requirements and Analysis",
				code : "SE 3352A",
				average : 82
			}, {
				name : "Human Computer Interaction",
				code : "SE 3353B",
				average : 93
			}]
		}]
  	});
});

module.exports = router;
