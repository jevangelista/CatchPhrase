var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PhraseSchema = new Schema({
  word: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  }
})

var Phrase = mongoose.model("Phrase", PhraseSchema);

module.exports = Phrase;