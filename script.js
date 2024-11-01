// Write the logic to get the computer choice

function getComputerChoice() {
    randNum = Math.random() * 3;

    if (randNum < 1) {
        return "rock";
    } else if (randNum < 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Write the logic to get the human choice

function getHumanChoice() {
    humanChoice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice
    } else {
        // Return rock as a backup for invalid input
        return "rock"
    }
}

// Declare the players score variables

humanScore = 0
computerScore = 0

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Draw!")
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.")
        } else {
            console.log("You win! Rock beats Scissors.")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock.")
        } else if (computerChoice == "paper") {
            console.log("Draw!")
        } else {
            console.log("You lose! Scissors beats Paper.")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.")
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper.")
        } else {
            console.log("Draw!")
        }
    }
    console.log()
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

