/* Create prompt for players 1 
return variable for player 1 
create a function named getComputerChoice that returns randomly rock, paper, scissors
create prompt to enter their choice of rock, paper, or scissors
return a message that says 'Rock paper scissors shoot, and then returns a message with 
choices and winner of the round"
*/

let randomNumber = Math.random() * 10

function getComputerChoice() {
    return Math.floor(randomNumber);
}


console.log(getComputerChoice());