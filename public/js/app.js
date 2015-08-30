// On page load
$(function() {
  pageLoad();
});

// function definitions

function pageLoad() {
  // load foods
  getPhrases();
  // set event listeners
  $("#new-phrase-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post to food#create
    $.post("/phrases", $(this).serialize())
      .done(function(res){
        // append new food to the page
        getPhrases();
        $("#new-phrase-form")[0].reset();
      });
  });
}

function getPhrases() {
  $.get("/phrases", function(res){
    var phrases = res.reverse();
    // grab foods template
    renderPhrases(phrases)
  });
}

function renderPhrases(phrases) {
  template = _.template($("#phrases-template").html());
  // input foods into template and append to parent
  phraseItems = phrases.map(function(phrase) {
    return template(phrase);
  });
  // clear content (for repeated use)
  $("#phrase-ul").html("");
  // append foods to ul
  $("#phrase-ul").append(phraseItems);
}

function deletePhrase(context) {
  var phraseId = $(context).data()._id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      // once successfull, re-render all foods
      getPhrases();
    }
  });
}
