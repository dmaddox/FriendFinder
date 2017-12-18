// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3003;



// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Routing
	// HTML
	htmlRoutes.survey(app);
	htmlRoutes.home(app);



///study THIS IS RECORDED in study hall!


// apiRoutes(app)


// //mult routes
// apiRoutes.apiRoutes1(app)