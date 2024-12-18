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

    const runningScore = document.querySelector("#runningScore")
    const outcome = document.querySelector("#outcome")

    // Declare game constants and variables
    const HUMAN_WIN = 1;
    const DRAW = 0;
    const COMPUTER_WIN = -1;

    const NUM_ROUNDS = 5;
    const MAX_SCORE = 5;

    let humanScore = 0;
    let computerScore = 0;

    let result = 0;

    // Write the logic to play a single round

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                outcome.textContent = "Draw!"
                return DRAW
            } else if (computerChoice == "paper") {
                outcome.textContent = "You lose! Paper beats Rock."
                return COMPUTER_WIN
            } else {
                outcome.textContent = "You win! Rock beats Scissors."
                return HUMAN_WIN
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                outcome.textContent = "You win! Paper beats Rock."
                return HUMAN_WIN
            } else if (computerChoice == "paper") {
                outcome.textContent = "Draw!"
                return DRAW
            } else {
                outcome.textContent = "You lose! Scissors beats Paper."
                return COMPUTER_WIN
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                outcome.textContent = "You lose! Rock beats Scissors."
                return COMPUTER_WIN
            } else if (computerChoice == "paper") {
                outcome.textContent = "You win! Scissors beats Paper."
                return HUMAN_WIN
            } else {
                outcome.textContent = "Draw!"
                return DRAW
            }
        }
    }

    // Setup functionality for buttons that player can use to make a choice each round
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            result = playRound(button.id, getComputerChoice())
            if (result > 0) {
                humanScore++;
            } else if (result < 0) {
                computerScore++;
            }
            runningScore.textContent = `Player: ${humanScore}    Computer: ${computerScore}`;
            if (humanScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
                if (computerScore > humanScore) {
                    outcome.textContent = `The computer wins with a score of ${computerScore}!`
                } else if (computerScore < humanScore) {
                    outcome.textContent = `The human wins with a score of ${humanScore}!`
                } else {
                    outcome.textContent = "It's a draw!"
                }
                // restart the game after showing the final score for 5 seconds
                setTimeout(() => {
                    location.reload();
                }, 5000); // 5000 milliseconds = 5 seconds

            }
        })
    })
}

playGame()


