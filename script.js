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
// select div playerScore
const playerScore = document.querySelector(".playerScore");
// select div computerScore
const computerScore = document.querySelector(".computerScore");
// select div finalResult
const finalResult = document.querySelector(".finalResult");
// create variable for playerWins
let playerWins = 0;
// create variable for playerLosses
let playerLosses = 0;
// create variable for playerDraws
let playerDraws = 0;
// create variable for computerWins
let computerWins = 0;
// create variable for computerLosses
let computerLosses = 0;
// create variable for computerDraws
let computerDraws = 0;
// while playerWins < 5 || computerWins < 5
while (playerWins < 5 || computerWins < 5) {
    buttons.forEach(button => button.addEventListener("click", () => {
        const playerSelection = button.textContent;
        const computerChoice = getComputerChoice();
        result.textContent = playRound(playerSelection, computerChoice);
    // if result.textContent.slice(0,7) === "You Win"
    //      playerWins++
    //      computerLosses++
    //      playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`
    //      computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`
    if (result.textContent.slice(0,7) === "You Win") {
        playerWins++;
        computerLosses++;
        playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`;
        computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`;
    // else if result.textContent.slice(0,8) === "You Lose"
    //      playerLosses++
    //      computerWins++
    //      playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`
    //      computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`
    } else if (result.textContent.slice(0,8) === "You Lose") {
        playerLosses++;
        computerWins++;
        playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`;
        computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`;
    // else 
    //      playerDraws++
    //      computerDraws++
    //      playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`
    //      computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`
    } else {
        playerDraws++;
        computerDraws++;
        playerScore.textContent = `Player Score: W-${playerWins} L-${playerLosses} D-${playerDraws}`;
        computerScore.textContent = `Computer Score: W-${computerWins} L-${computerLosses} D-${computerDraws}`;
    }

    // if playerWins === 5
    // finalResult.textContent = "Aye! Good job, you won!"
    // else
    // finalResult.textContent = "Ouff! we'll get them next time!"
    }));
}