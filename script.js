// Write the logic to get the computer choice

function getComputerChoice() {
    randNum = Math.random() * 3;

    // console.log(randNum);

    if (randNum < 1) {
        return "rock";
    } else if (randNum < 2) {
        return "paper"
    } else {
        return "scissors"
    }
}