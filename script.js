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
    humanChoice = prompt("Enter your choice (rock, paper, scissors): ");

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice
    } else {
        // Return rock as a backup for invalid input
        return "rock"
    }
}