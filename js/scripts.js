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
      gameOver();
      return "You rolled a " + finalRoll + " and your score is greater than or equal to 25 ( " + finalScore + " ).  You win!  Happy dance time!";
    } else {
      return "You rolled a " + rollDice + ".  Your score is " + this.score + ".  Do you want to roll or hold?";
    }
  } else {
    console.log("Current roll: " + rollDice);
    console.log("Total roll: " + this.score);
    this.score = 0;
    this.roundScore = [];
    gameOver();
    return "Oh, Oh, you rolled a 1.  Your score is " + this.score + " and your turn is over :-(";
   }
};

Player.prototype.hold = function() {
    this.roundScore.push(this.score);
    return "Your round score is " + this.roundScore.slice(-1).pop() + "."; // or last this.roundScore index
};

// User Interface Logic
function rollingDiceOptions(){
  $(".random").show();
  $(".hold").show();
  $("form#entry").hide();
  $("h3").hide();
};

function gameOver(){
  $(".random").hide();
  $(".hold").hide();
  $(".new-game").show();
};

// Frontend side
$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    var name = $("input#player-1").val();
    var player1 = new Player(name);
    $("#playername").text(player1.name);
    console.log(player1.name);
    rollingDiceOptions();

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
    //new game click
    $(".new-game").click(function(){
      location.reload();
    });
  });
});
