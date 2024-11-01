// Write the logic to get the computer choice

function getComputerChoice() {
    let randNum = Math.random() * 3;

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
    let humanChoice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
    }
    return humanChoice;
}

// Write the logic to play the entire game

function playGame() {

    // Declare game constants and variables
    const HUMAN_WIN = 1;
    const DRAW = 0;
    const COMPUTER_WIN = -1;

    const NUM_ROUNDS = 5;

    let humanScore = 0;
    let computerScore = 0;

    let result = 0;

    // Write the logic to play a single round

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("Draw!")
                return DRAW
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.")
                return COMPUTER_WIN
            } else {
                console.log("You win! Rock beats Scissors.")
                return HUMAN_WIN
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock.")
                return HUMAN_WIN
            } else if (computerChoice == "paper") {
                console.log("Draw!")
                return DRAW
            } else {
                console.log("You lose! Scissors beats Paper.")
                return COMPUTER_WIN
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors.")
                return COMPUTER_WIN
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper.")
                return HUMAN_WIN
            } else {
                console.log("Draw!")
                return DRAW
            }
        }
    }


    for (let i = 0; i < NUM_ROUNDS; i++) {
        result = playRound(getHumanChoice(), getComputerChoice());

        if (result > 0) {
            humanScore++;
        } else if (result < 0) {
            computerScore++;
        }
    }

    if (computerScore > humanScore) {
        console.log(`The computer wins with a score of ${computerScore}!`);
    } else if (computerScore < humanScore) {
        console.log(`The human wins with a score of ${humanScore}!`);
    } else {
        console.log("It's a draw!")
    }

}

playGame()

