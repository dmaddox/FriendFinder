// Dependencies
// =============================================================
var path = require("path");


//mult routes
module.exports = function(app) {
	// A GET Route to /survey which should display the survey page.
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	
	app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};



