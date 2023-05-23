function getComputerChoice() {
    const play = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let shuffleResult = play[randomNumber];
    return shuffleResult;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Lose. Paper beats Rock";
        } else {
            return "It's a draw!";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Lose. Scissors beats Paper";
        } else {
            return "It's a draw!";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            return "You Lose. Rock beats Scissors";
        } else {
            return "It's a draw!";
        }
    }
}

const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
    const playerSelection = button.textContent;
    const computerChoice = getComputerChoice();
    result.textContent = playRound(playerSelection, computerChoice);
}));