/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var awesomeThoughts = "I am Rafi and I am awesome!"
console.log(awesomeThoughts);

var email = "rafi@udacity.com"
var newEmail = email.replace("udacity", "gmail")

console.log(email);
console.log(newEmail);

var funthoughts = awesomeThoughts.replace("awesome", "fun");

$("#main").append(funthoughts);


var name = "Mohammad Rahman (Rafi)";
var role = "Software Developer";

var skills = ['Software Development', 'QA Analyst', 'System Engineering']
*/


var bio = {
			"name" : "Mohammad Rahman (Rafi)",
			"role" : "Engineer-In-Training",
			"contacts" : 	{ 
						  	   "mobile" : "416 939 5855",
						  	   "email" : "mohammad.rahman.rafi@gmail.com",
						  	   "location" : "Toronto, Ontario",
						  	   "github" : "mohammad-rahman-rafi",
						  	   "twitter" : "@tasfique07"
 						  	},
			"bioPic" : "images/fry.jpg",
			"welcomeMsg" : "Hey! I am Rafi. I am a Software Developer with a background in Electrical and Computer Engineering. Feel free to check my resume or shoot me an email.",
			"skills" : ['Software Development', 'Quality Assurance Analyst', 'System Engineering']
};


var work = {
			"jobs" : [
								{
									"title" : "Commissioning Engineer",
									"employer" : "Siemens Canada",
									"dates" : "Sep 2014 - Aug 2015",
									"location" : "Oakville, ON",
									"description" : "Worked with Mr. Alif Gilani in the Energy Automation group providing application configuration and commissioning support for SCADA System based on IEC61850 protocol."
								},
								{
									"title" : "Assistant Project Manager",
									"employer" : "Hydro One",
									"dates" : "Apr 2014 - Sep 2015",
									"location" : "Toronto, ON",
									"description" : "Worked with Mr. Birendra N. Singh (Bob) in the Technology Development (RD&D) group providing project management support for an Energy Storage Project."
								},
								{
									"title" : "Transmission Lines Engineer",
									"employer" : "Hydro One",
									"dates" : "Jan 2012 - Apr 2012",
									"location" : "Toronto, ON",
									"description" : "Worked with Dr Ibrahim Hathout in the Transmission Lines Engineering (R&D) group updating weather database and digitizing transmission line profiles using PLS CADD."
								},
								{
									"title" : "Research Associate",
									"employer" : "University of Windsor",
									"dates" : "Sep 2010 - Aug 2013",
									"location" : "Windsor, ON",
									"description" : "Worked with a number of professors and M.A.Sc students assisting them in their research work."
								}
							]
			};


var education = {
				 "schools" : [
				 				{
				  					"name" : "University of Toronto",
				  					"dates" : "Sep 2016 - Nov 2018",
				  					"degree" : "Master of Engineering",
				  					"major" : "Computer Engineering",
				  					"location" : "Toronto, ON"
								},
				 				{
				 					"name" : "University of Windsor",
				  					"dates" : "Sep 2009 - Oct 2013",
				  					"degree" : "Bachelor of Applied Science",
				  					"major" : "Electrical Engineering",
				  					"location" : "Windsor, ON"
								}
							],
				 "courses" : [
				 				{
				 					"name" : []
				 				},
				 				{
				 					"name" : []
				 				}
				 			]
				};


var projects = {
				"projects" : [
								{
									"title" : "Web Application",
									"dates" : "Jan 2017 - Apr 2017",
									"description" : "Developed a web application using AWS technologies that can resize its worker pool based on user demand."
								},
								{
									"title" : "Car Recognition App",
									"dates" : "Jan 2018 - Apr 2018",
									"description" : "Developed an iOS App that uses deep neural network (CNN) to classify automobiles and display car details."
								},
								{
									"title" : "Optimizing HVAC System",
									"dates" : "Jan 2018 - Apr 2018",
									"description" : "Optimized the efficiency of an office building HVAC system by 20% using deep neural network (RNN)."
								},
								{
									"title" : "CAD Tool",
									"dates" : "Sep 2016 - Dec 2016",
									"description" : "Developed a CAD tool to compare efficiency of various RAM structures and wire-lengths in FPGA boards."
								},
								{
									"title" : "Indoor Positioning System",
									"dates" : "Jan 2013 - Aug 2013",
									"description" : "Developed an Indoor Positioning System (IPS) in an android platform that uses client-server communication, external database system, and an algorithm for location positioning."
								}
							 ]
				};
				

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts, #footerContacts").append(formattedMobile);
$("#topContacts, #footerContacts").append(formattedEmail);
$("#topContacts, #footerContacts").append(formattedTwitter);
$("#topContacts, #footerContacts").append(formattedGithub);
$("#topContacts, #footerContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

/*
var formattedPosition = HTMLworkTitle.replace("%data%", work["title"]);
var formattedSchool = HTMLschoolName.replace("%data%", education.school);

$("#main").append(formattedPosition);
$("#main").append(formattedSchool);
*/


if (bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

};


/*
for (key in work){
    if (work.hasOwnProperty(key)) {
        console.log(work[key]);
    }
}
*/


function displayWork(){

	for (jobs in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
		$(".work-entry:last").append(formattedDescription);	
	}
};
displayWork();


$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function locationizer(work_obj){

	var locationArray = [];

	for (employment in work_obj.employment){
		var newLocation = work_obj.employment[employment].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}
console.log(locationizer(work));


function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);


projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

	}
}
projects.display();


education.display = function(){
	for (schools in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedTName = HTMLschoolName.replace("%data%", education.schools[schools].name);
		$(".education-entry:last").append(formattedTName);

		console.log(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
		$(".education-entry:last").append(formattedDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
		$(".education-entry:last").append(formattedMajor);

	}
}
education.display();


$("#mapDiv").append(googleMap);



