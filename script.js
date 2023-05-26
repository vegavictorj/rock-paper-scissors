const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const finalResult = document.querySelector(".finalResult");
let playerWins = 0;
let playerLosses = 0;
let playerDraws = 0;
let computerWins = 0;
let computerLosses = 0;
let computerDraws = 0;

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

buttons.forEach(button => button.addEventListener("click", () => {
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection, computerSelection);

    if (result.textContent.slice(0,7) === "You Win") {
        playerWins++;
        computerLosses++;
        playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`;
        computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`;
    } else if (result.textContent.slice(0,8) === "You Lose") {
        playerLosses++;
        computerWins++;
        playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`;
        computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`;
    } else {
        playerDraws++;
        computerDraws++;
        playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`;
        computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`;
    }

    if (playerWins === 5) {
        finalResult.textContent = "Aye! Good job, you won!";
        playerWins = 0;
        playerLosses = 0;
        playerDraws = 0;
        computerWins = 0;
        computerLosses = 0;
        computerDraws = 0;
    } else if (computerWins === 5) {
        finalResult.textContent = "Ouff! We'll get them next time!";
        playerWins = 0;
        playerLosses = 0;
        playerDraws = 0;
        computerWins = 0;
        computerLosses = 0;
        computerDraws = 0;
    }
}));