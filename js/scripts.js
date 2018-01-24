//business

function Players (name, score) {
  this.name = name;
  this.score = score;
};

function randomNumber(numberGen) {
  var numberGen = Math.floor((Math.random()* (7-1) + 1));
  return numberGen;
};

function randomSum(diceRoll) {
  var diceRolls = [];
  for (var i = 1; i <= 5; i++) {
    diceRolls[i] = diceRolls.push(diceRoll);
  }
  console.log(diceRolls);
  // var sum =+ diceRoll;
  return diceRolls;
}


function dice (someValue) {
  // random jquery function
};


//logic
$(document).ready(function() {
  $("#random").click(function(event) {
    event.preventDefault();
    var point = randomNumber();
    $(".randomNumber").text(point);
    var sum = randomSum(point);
    $(".totalNumber").text(sum);
});

});
