// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


//mult routes
module.exports = {
	survey: function(app) {
		// A GET Route to /survey which should display the survey page.
		app.get('/survey', function(req, res) {
			res.sendFile(path.join(__dirname, "../public/survey.html"));
		});
	},
	home: function(app) {
		// A default, catch-all route that leads to home.html which displays the home page.
		app.get('/:name?', function(req, res) {
			if (req.params.name !== 'survey') {
				res.sendFile(path.join(__dirname, "../public/home.html"));
			};
		});
	}
};