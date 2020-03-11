// business logic
var numberRange = function(number) {
  var newNumberRange = [];
  for (let i = 0; i <= number; i++) {
    newNumberRange.push(' ' + i);
  }
  return(newNumberRange.toString());
}; 

// user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = numberRange(number);
    $("#result").text(result);
  });
});