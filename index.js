//REQUIREMENTS
var express = require("express"),
	app = express(),
	path = require("path"),
	bodyParser = require("body-parser"),
	_ = require("underscore"),
	views = path.join(process.cwd(), "views/");

// SAMPLE DATA 
var people = [
	{name: "Jamie", type:"girl"},
	{name: "Beau", type:"boy"}
];

//ROUTES

//Single route
app.get("/", function (req, res) {
	res.send("Hello Jamie!");
});

//Testing data route
app.get("/people", function (req, res) {
	res.send(people);
});

//SPECIFYING PORT
app.listen(3000, function() {
	console.log("listening on port 3000");

});