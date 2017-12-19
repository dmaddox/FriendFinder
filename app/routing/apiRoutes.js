// Dependencies
// =============================================================
var friends = require("../data/friends");
var bodyParser = require("body-parser");

//API Routes
module.exports = {
	getFriends: function(app) {
		// A GET route with the url /api/friends. 
		app.get('/api/friends', function(req, res) {
			//This will be used to display a JSON of all possible friends.
			res.json(friends);
		});
	},
	postResults: function(app) {
		// A POST routes /api/friends. 
		app.post('/api/friends', function(req, res) {
			// This will be used to handle incoming survey results. 
			var newFriend = req.body;
			console.log(newFriend);
			// push the new friend info to the friends array
			friends.push(newFriend);
			res.json(true);
			// This route will also be used to handle the compatibility logic.
			// *****NEEDED HERE******
			
		});
	}
};

