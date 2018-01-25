//business

function Player (name, score, roundScore, totalScore) {
  this.name = name;
  this.score = [];
  this.roundScore = 0;
  this.totalScore = 0;
}

Player.prototype.rollingDice = function() {
   var rollDice = Math.floor((Math.random()* (7-1) + 1));
   if (rollDice >= 2) {
   this.score.push(rollDice)
   console.log(rollDice);
  } else {
    this.score = [];
    return
   }
};

Player.prototype.hold = function() {
    var s = this.score;
    var subtotal = s.reduce(function (a, b) {
      return a + b ;
    });
      this.roundScore = subtotal;
      this.score=[];
};

Player.prototype.total = function() {
  this.totalScore += this.roundScore
  this.roundScore = 0;

};

// when it reaches 100. it will be win
Player.prototype.winner = function(){
  if (this.totalScore >= 25) {
    console.log("You win!  Happy dance time!")
  }

};


// var player1 = "name1";
// var player2 = "name2";


$(document).ready(function() {
  var player1 = new Player (name);

  $("#random").click(function(event){
    event.preventDefault();
    
  });

});













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
