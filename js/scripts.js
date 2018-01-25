//business

function Player (name, score, totalScore) {
  this.name = name;
  this.score = [];
  this.totalScore = 0;
}

Player.prototype.rollingDice = function() {
  // make number generate here
   var rollDice = Math.floor((Math.random()* (7-1) + 1));
   // player1.score = rollDice;
   this.score.push(rollDice);
   console.log(rollDice);
   return
}

// new player needs to be made.
// var bob = new Player("bob");
//bob.rollingDice();
//bob.score(); *it will hold all of the rollingDice numbers in array*

//
// Player.prototype.hold = function() {
//
// }
//
// $(document).ready(function() {
//
//
//
//   $("form#player-1").submit(function(event) {
//     event.preventDefault();
//     $("#nameButton").text();
//   });
//   $("#random").click(function(event) {
//     event.preventDefault();
//     // var number;
//     var player1 = new Player("Bob");
//
//     return Player.rollingDice(player1);
//     // alert(point);
//     // player1.score = point;
//     // console.log(player1.score);
//     // console.log(player1);
//     // $(".randomNumber").text(player1.score);
//     // var sum = Player.prototype.randomSum(point);
//     //$(".totalNumber").text(sum);
//   });
// });
