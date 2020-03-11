$(document).ready(function() {
  $("form#mr-roboger").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = numberRange(number);
    $("#result").text(result);
  });
});