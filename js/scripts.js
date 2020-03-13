// business logic
var numberRange = function(number) {
  var newNumberRanges = [];
  for (let i = 0; i <= number; i++) {
    newNumberRanges.push(' ' + i);
  }

  if(newNumberRanges.indexOf(1) !== -1) {
    alert("Value exists!")
} else {
    alert("Value does not exist!")
}
  return(newNumberRanges.toString());
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