## Pig Dice

### https://github.com/r-craig73/pigdice

### An interactive game (1 player) ~~(2players)~~ playing pig dice, using a die.

#### By Kim H. & Ron C. (ron.craig@comcast.net)

## Specifications

### Save player's name and starts the game
 - Input: Player1, Player2
 - Output: Player object

### A button to start the game
 - Input: Press start button, click
 - Output: Game will start with Player1

### Player will roll die (letter command or button icon)
 - Input: Player rolls die
 - Output: Die's number

### If Player rolls a 1, then the round is over ~~and it is the next player turn~~
 - Input: 1
 - Output: Oh, Oh, you rolled a 1.  Your score is 0 and your turn is over :-(

### If Player rolls between 2 and 6, then the player points are added
 - Input: 6,
 - Output: 6, your score is 6

### After the points are added, the player has a choice to either continue (keep rolling) or hold and save the total points
 - Input: After a successful roll
 - Output: You rolled a 5.  Your score is 6.  Do you want to roll or hold?

### If the player holds, then ~~it is the next player turn and the previous~~ the player saves the total points
 - Input: hold
 - Output: Your round score is 6. ~~, now it's player2 turn~~

### If a player reaches 25 points or more, the player is a winner
 - Input: Player rolls a value between 2 and 6, close to 25
 - Output: "Your rolled a 4 and your score is greater than or equal to 25 ( 27 ).
 - You win!  Happy dance time!"

## To Do Tasks

 - Generate random number for the dice [DONE]

 - Holding the number in the array's last element [DONE]
 - Retrieve the last element array to continue the next round [DONE]

 - Turn roll and hold into prototypes [DONE]
 - Add a second player [ongoing]
 - Alternate between player 1 and player 2 [ongoing]
 
