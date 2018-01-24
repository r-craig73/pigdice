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

}

//logic
$(document).ready(function() {
  $("form#player-1").submit(function(event) {
    event.preventDefault();
    $("#nameButton").text();
  })

  $("#random").click(function(event) {
    event.preventDefault();


    var point = randomNumber();
    $(".randomNumber").text(point);
    var sum = randomSum(point);
    $(".totalNumber").text(sum);
});

});


// var diceRolls = [];
// var score = 0;
// for (var i = 1; i <= 5; i++) {
//   if (diceRoll === 1) {
//     score = 0;
//     // switch to player2
//     // return
//   }
//   else if (diceRoll >= 2 || diceRoll <= 6) {
//     score += diceRoll;
//   }
//   else  {
//     // oh-oh
//     // diceRolls[i] = diceRolls.push(diceRoll);
//   }
// }
// console.log(diceRolls);
// // var sum =+ diceRoll;
// return diceRolls;
