// business logic
var numberRange = function(number) {
  var newNumberRanges = [];
  for (let i = 0; i <= number; i++) {
    newNumberRanges.push(i);
  }
  console.log(newNumberRanges);

  newNumberRanges.forEach(function(newNumberRange) {
    if (newNumberRanges.includes(3)) {
      newNumberRanges[3] = "Won't you be my neighbor?";
    } else if (newNumberRanges.includes(2)) {
      newNumberRanges[2] = 'Boop!';
  } else if (newNumberRanges.includes(1)) {
    newNumberRanges[1] = 'Beep!';
  }
})

  return(newNumberRanges);
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