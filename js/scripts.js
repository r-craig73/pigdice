//business

function Player (name) {
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

$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    var name = $("input#player-1").val();
    var player1 = new Player(name);
    $("#playername").text(player1.name);
    console.log(player1.name);


//roll click
    $("#random").click(function(){
      player1.rollingDice();
      $("#roundScore").text(player1.score);
      console.log(player1.score);
//hold click
      // $("#hold").click(function(event){
      //     event.preventDefault();
      //     player1.hold();
      //
      //     $("#totalNumber").text(player1.totalScore);
      //     console.log(player1.totalScore);
      // });
    });
  });
});
    // var firstPlayer = $("button#nameButton").val();
    // var player1 = new Player (name)
    // var secondPlayer = $(this).find("input#player-2").val();
    // var player2 = new Player (firstPlayer).val();
















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
