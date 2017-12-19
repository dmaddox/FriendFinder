// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3003;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Routing
// =============================================================
	// API
	require("./app/routing/apiRoutes").getFriends(app);
	require("./app/routing/apiRoutes").postResults(app);
	// HTML
	require("./app/routing/htmlRoutes")(app);
