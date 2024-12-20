/* Create prompt for players 1 
return variable for player 1 
create a function named getComputerChoice that returns randomly rock, paper, scissors
create prompt to enter your choice of rock, paper, or scissors
create a function that compares computer choice vs human choice
return a message that says 'Rock paper scissors shoot, and then returns a message with 
choices and winner of the round"
*/


/* This is old code, review to see where you went wrong
let randomNumber = Math.random() * 10 

function getComputerChoice() {
    return Math.floor(randomNumber);
}

let computerChoice;

function choice() {

    if (randomNumber <= 3) {
        computerChoice = "Rock";
    } else if (3 < randomNumber <= 6 ) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
}

console.log(computerChoice);
*/

let getHumanChoice = prompt("Enter your choice of Rock, Paper, Scissors.")

if (getHumanChoice.toLowerCase() === "rock"){
    alert("You chose Rock!");
} else if (getHumanChoice.toLowerCase() === "paper") {
        alert("You chose Paper!");
} else {
    alert ("You chose Scissors!");
}


function getRandomNumber() {
    return Math.random() * 10;
}

function getComputerChoice() {
    let randomNumber = getRandomNumber();
    let computerChoice;

    if (randomNumber <= 3) {
        computerChoice = "Rock";
    } else if (randomNumber > 3 && randomNumber <= 6) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);