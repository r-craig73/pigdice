## Pig Dice

### An interactive game (2players) playing pig dice,
### using a die.

#### By Kim H. & Ron C.

## Specifications (front-end)

### Save player's name
 -  Input: Player1, Player2
 -  Output: Player object

### A button to start the game
 -  Input: Press start button, click
 -  Output: Game will start with Player1

### Player will roll die (letter command or button icon)
 -  Input: Player rolls die
 -  Output: Die's number

### If Player rolls a 1, then it is the next player turn
 -  Input: 1, bad luck
 -  Output: Bad luck, 0 points, your turn next player

### If Player rolls [2-6], then the player points are added
 -  Input: 6,
 - Output: 6, your score is 6

### After the points are added, the player has a choice to
### either continue (keep rolling) or hold
 -  Input: After successful roll
 -  Output: Your score is 6, do you want to roll or hold?

### If the player holds, then it is the next player turn
### and the previous player hold on to their total points
 -  Input: hold
 -  Output: your total points for this turn is 23, now it's #### player2 turn

### If a player reaches 100 points or more, the player is a winner
 -  Input: After roll [2-6]
 -  Output: Congrats! You reach 102 points. Winner, winner chicken
 -  dinner!

## Specifications (business-logic)

 - Generate random number for the dice [DONE]
 - What objects and what it store

 -  fine if the dice number is holding the number in an array
 -  get array to hold each rolled number with in array. and not number range
    - why changing var i = 1 let index 0 switch numbers
