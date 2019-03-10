## Pig Dice

### An interactive game (1 player) ~~(2players)~~ playing pig dice, using a die.

#### By Kim H. & Ron C.

## Specifications

### Save player's name and starts the game
 -  Input: Player1, Player2
 -  Output: Player object

### A button to start the game
 -  Input: Press start button, click
 -  Output: Game will start with Player1

### Player will roll die (letter command or button icon)
 -  Input: Player rolls die
 -  Output: Die's number

### If Player rolls a 1, then it is the next player turn
 -  Input: 1
 -  Output: Oh, Oh, you rolled a 1.  Your score is 0 and your turn is over :-(

### If Player rolls between 2 and 6, then the player points are added
 -  Input: 6,
 - Output: 6, your score is 6

### After the points are added, the player has a choice to either continue (keep rolling) or hold and save the total points
 -  Input: After a successful roll
 -  Output: Your score is 6, do you want to roll or hold?

### If the player holds, then ~~it is the next player turn and the previous~~ the player saves the total points
 -  Input: hold
 -  Output: Your total points for this turn is 14 ~~, now it's #### player2 turn~~

### If a player reaches 25 points or more, the player is a winner
 -  Input: Player rolls a value between 2 and 6
 -  Output: You win!  Happy dance time!

## To Do Tasks

 - Generate random number for the dice [DONE]
 - What objects and what it store [ongoing]

 -  fine if the dice number is holding the number in an array [ongoing]
 -  get array to hold each rolled number with in array. and not number range [ongoing]

 - turn roll and sum into prototypes
 - for rolling prototype you want it to roll once, and state the player's roll score 
