var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catchphrase_app");

module.exports.Phrase = require("./phrase");