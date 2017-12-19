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
		// A POST routes /api/friends that will be used to handle incoming survey results. 
		app.post('/api/friends', function(req, res) {
			// store the request body in a variable
			var newFriend = req.body;
			// push the newFriend info to the friends array
			friends.push(newFriend);
			// Compatibility logic
			// get the newFriend's total score
			var newFriendSum = newFriend.scores.reduce(function (total, amount) {
			    return total + amount
			});

			// compare it to the total score of each other friend
			var friendScores = [];
			for (i = 0; i < friends.length - 1; i++ ) {
				var friendSum = friends[i].scores.reduce(function (total, amount) {
				    return total + amount
				});
				var difference = Math.abs(newFriendSum - friendSum);
				friendScores.push(difference);
			};

			var min = Math.min.apply(null, friendScores)

			var z = friendScores.indexOf(min);
			// respond w/ the matching friend 
			res.json(friends[z]);
		});
	}
};

