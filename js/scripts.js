//business

function Player (name, score, totalScore) {
  this.name = name;
  this.score = score;
  this.totalScore =totalScore
  // make .score an empty array or make it into it's seperate this. ** not too sure **
};

Player.prototype.rollingDice = function() {
  // turn into prototype because each prototype will only apply to certain players
  var numberGen = Math.floor((Math.random()* (7-1) + 1));
  return numberGen;
};

Player.prototype.randomSum = function() {
  //turn functions into prototypes. you want it to roll once and store it within the player. so not necessary for it to be a for loop. since you just want to roll once, and save within the player array. That way you can push their roll result into the array.
  var diceRolls = [];
  var score = 0;
  for (var i = 1; i <= 5; i++) {
    // diceRolls = [];
    if (rollingDice === 1) {
      diceRolls.push(i);  // push the index into the empty array for it to store
    } else {
      diceRolls.push(rollingDice);
      console.log(diceRolls);
      ///sum = diceRolls.reduce();
    }
    // return diceRolls;
  }
    return diceRolls;
};

//logic
$(document).ready(function() {
  $("form#player-1").submit(function(event) {
    event.preventDefault();
    $("#nameButton").text();
  });
  $("#random").click(function(event) {
    event.preventDefault();
    var point = rollingDice();
    // $(".randomNumber").text(point);
    var sum = randomSum(point);
    $(".totalNumber").text(sum);
  });
});
