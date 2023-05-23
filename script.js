function getComputerChoice() {
    const play = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let shuffleResult = play[randomNumber];
    return shuffleResult;
}

function playRound() {
    const computerSelection = getComputerChoice;
    const playerSelection = getPlayerChoice;

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

    // select buttons container
    // add eventListener "click" to container
    //      call playRound function
    const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click", playRound);
}



// function getPlayerChoice()??
// create variable for player choice
// select buttons container
// add eventListener "click" to container
//      assign textContent of clicked button to playerChoice
// return playerChoice
// function getPlayerChoice() {
//     let playerChoice;
//     const buttons = document.querySelector(".buttons");
//     buttons.addEventListener("click", (e) => {
//         playerChoice = e.target.textContent;
//         console.log(playerChoice);
//     });
// };
// console.log(getPlayerChoice());