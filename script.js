function getComputerChoice() {
    const play = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let shuffleResult = play[randomNumber];
    return shuffleResult;
}

function playRound() {
    const computerSelection = getComputerChoice();

    let playerSelection = prompt("Rock, Paper or Scissors?");
    let playerSelectionTemp = playerSelection.slice(0,1);
    playerSelectionTemp = playerSelectionTemp.toUpperCase();
    let playerSelectionTemp2 = playerSelection.slice(1);
    playerSelectionTemp2 = playerSelectionTemp2.toLowerCase();
    playerSelection = playerSelectionTemp + playerSelectionTemp2;

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

function game() {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    if (wins >= 3) {
        return `Congrats! You won!\nFinal score: W-${wins} L-${losses} D-${draws}`;
    } else if (losses >= 3) {
        return `You'll get them next time!\nFinal score: W-${wins} L-${losses} D-${draws}`;
    } else if (draws === 5 || draws === 1) {
        return `It's a draw. You'll get them next game!\nFinal score: W-${wins} L-${losses} D-${draws}`;
    } else if (draws === 3) {
        if (wins === 1) {
            return `It's a draw. You'll get them next game!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        } else if (wins === 0) {
            return `You'll get them next time!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        } else {
            return `Congrats! You won!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        }
    } else if (draws === 4) {
        if (wins === 1) {
            return `Congrats! You won!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        } else {
            return `You'll get them next time!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        }
    } else if (draws === 2) {
        if (wins === 2) {
            return `Congrats! You won!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        } else {
            return `You'll get them next time!\nFinal score: W-${wins} L-${losses} D-${draws}`;
        }
    }
}

// each time the player clicks a button, there is a function call to playRound()
// add eventListener of click to buttons
const buttons = document.querySelectorAll("button");
buttons.addEventListener("click", playRound);