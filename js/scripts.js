// Business Side

function Player (name) {
  this.name = name;
  this.score = 0;
  this.roundScore = [];
  this.totalScore = 0;
}

Player.prototype.rollingDice = function() {
   var rollDice = Math.floor((Math.random()* (7-1) + 1));
   if (rollDice >= 2) {
    this.score += rollDice;
    console.log("Current roll: " + rollDice);
    console.log("Total roll: " + this.score);
    if (this.score >= 25) {
      finalRoll = rollDice;
      finalScore = this.score;
      this.score = 0;
      this.roundScore = [];
      return "You rolled a " + finalRoll + " and your score is >= 25 (" + finalScore + ")  You win!  Happy dance time!";
    } else {
      return "You rolled a " + rollDice + ".  Your score is " + this.score + ".  Do you want to roll or hold?";
    }
  } else {
    console.log("Current roll: " + rollDice);
    console.log("Total roll: " + this.score);
    this.score = 0;
    this.roundScore = [];
    return "Oh, Oh, you rolled a 1.  Your score is " + this.score + " and your turn is over :-(";
   }
};

Player.prototype.hold = function() {
    this.roundScore.push(this.score);
    return "Your round score is " + this.roundScore.slice(-1).pop();  // or last this.roundScore index
};

// Frontend side
$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    var name = $("input#player-1").val();
    var player1 = new Player(name);
    $("#playername").text(player1.name);
    console.log(player1.name);


    //roll click
    $("#random").click(function(){
      event.preventDefault();
      $("#roundScore").text(player1.rollingDice());
      
    });
    //hold click
    $("#hold").click(function(event){
        event.preventDefault();
        $("#roundScore").text(player1.hold());
        console.log(player1.roundScore);
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
