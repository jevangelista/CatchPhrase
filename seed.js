// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var phrases_list =[
  {word: "Abstraction", definition: "Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs."},
  {word: "Array", definition: "An array is an ordered collection of data (either primitive or object). Based on its place in the array, each data item has a numeric index through which you can access the corresponding value. In JavaScript, arrays are also objects that can be manipulated with various methods."},
  {word: "Boolean", definition: "In computer science, a boolean is a logical data type that can have only the values true or false."},
  {word: "DOM", definition: "he DOM is a document model loaded in the browser and representing the document as a node tree, where each node represents part of the document (e.g. an element, text string, or comment)."},
  {word: "HTTP", definition: "HTTP (HyperText Transfer Protocol) is the basic protocol that enables file transfer on the Web. HTTP is textual (all communication is done in plain text) and stateless (no communication is aware of previous communications)."}
];

db.Phrase.remove({}, function(err, phrases){

  db.Phrase.create(phrases_list, function(err, phrases){
    if (err) { return console.log(err) };
    console.log("created", phrases.length, "phrases")
    process.exit();
  })

});

