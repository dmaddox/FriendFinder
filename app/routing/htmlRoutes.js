// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


// A GET Route to /survey which should display the survey page.
app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// A default, catch-all route that leads to home.html which displays the home page.
app.get('/:name?', function(req, res) {
	if (req.params.name !== 'survey') {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	};
});

// Listening from port 8080
app.listen(8080, function() {
  console.log("App listening on PORT 8080");
});