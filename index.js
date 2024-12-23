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

/*  THIS IS MY ORIGINAL CODE TO CAPTURE PLAYERS CHOICE USING PROMPT
let getHumanChoice = prompt("Enter your choice of Rock, Paper, Scissors.")

if (getHumanChoice.toLowerCase() === "rock"){
    alert("You chose Rock!");
} else if (getHumanChoice.toLowerCase() === "paper") {
        alert("You chose Paper!");
} else {
    alert ("You chose Scissors!");
}
*/

// Function to get the player's choice
function getHumanChoice() {
    let choice = prompt("Enter your choice of Rock, Paper, or Scissors.");
    let humanChoice;
    
    // Convert input to lowercase for comparison
    if (choice.toLowerCase() === "rock") {
        alert("You chose Rock!");
    } else if (choice.toLowerCase() === "paper") {
        alert("You chose Paper!");
    } else if (choice.toLowerCase() === "scissors") {
        alert("You chose Scissors!");
    } else {
        alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return getHumanChoice(); // Recursively call the function if input is invalid
    }
    
    return choice.toLowerCase(); // Return the player's choice for later use
}

// Save the human choice for later
let humanChoice = getHumanChoice();

// Log the choice for debugging or further use
console.log("Player's choice:", humanChoice);


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

    return computerChoice.toLowerCase();
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function getRoundWinner() {
    let roundWinner;

    if (computerChoice === "rock" && humanChoice === "paper") {
        roundWinner = "You win!";
        alert("You win!");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        roundWinner = "You lose!";
        alert("You lose!");
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        roundWinner = "You win!";
        alert("You win!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        roundWinner = "You lose!";
        alert("You lose!");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        roundWinner = "You win!";
        alert("You win!");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        roundWinner = "You lose!";
        alert("You lose!");
    } else {
        alert ("Go again");
    }

    return roundWinner;
}

let roundWinner = getRoundWinner();
console.log(roundWinner);