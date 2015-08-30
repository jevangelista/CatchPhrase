//REQUIREMENTS
var express = require("express"),
	app = express(),
	path = require("path"),
	bodyParser = require("body-parser"),
	_ = require("underscore"),
	views = path.join(process.cwd(), "views/");

//Plugging database
var db = require('./models');

// SAMPLE DATA 
/*var people = [
	{name: "Jamie", type:"girl"},
	{name: "Beau", type:"boy"}
];*/

//CONFIG//
//serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES

//Render index.html route
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

//phrase index route
app.get("/phrases", function(req, res){

    db.Phrase.find({}, function(err, phrases){
        if (err) {
            console.log("BAD THING!");
            return res.sendStatus(400);
        }
        res.send(phrases);
    });

});

// posts new phrases
app.post("/phrases", function (req, res){
  var newPhrase = req.body;

  db.Phrase.create(newPhrase, function(err, phrases){
        if (err) {  
        console.log(err);
        }
        res.send(newPhrase);
    });

});

//deletes phrases
app.delete("/phrases/:id", function (req, res){
    var removedPhrase = req.params.id;
    console.log(removedPhrase);
  db.Phrase.remove({_id: removedPhrase}, function (err, phrases){
        if (err) {  
        console.log(err);
        }
        res.send(removedPhrase);
    });
});

//Single route
// app.get("/", function (req, res) {
//	res.send("Hello there, Jamie!");
//});



//Testing data route
//app.get("/people", function (req, res) {
//	res.send(people);
//});


//SPECIFYING PORT
app.listen(3000, function() {
	console.log("listening on port 3000");

});