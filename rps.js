const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("What is your name? ");
console.log("Hello, " + name + "!");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function wantsToPlay() {
    let answer = prompt("Do you want to play Rock, Paper, Scissors? (yes/no): ").toLowerCase();
    if (answer === "yes" || answer === "y") {
        return true;
    } else {
        console.log("Maybe next time!");
        return false;
    }
}

let userScore = 0;
let computerScore = 0;
let ties = 0;

function game() {
    if (!wantsToPlay()) {
        return; // Exit if the user doesn't want to play
    }

    let playAgain = true;

    while (playAgain) {
        let userChoice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
        let computerChoice = getComputerChoice();

        let result = playRound(userChoice, computerChoice);
        console.log(`Computer chose: ${computerChoice}\n${result}`);

        if (result === "You win!") {
            userScore++;
        } else if (result === "You lose!") {
            computerScore++;
        } else {
            ties++;
        }

        console.log(`Score: You - ${userScore} | Computer - ${computerScore} | Ties - ${ties}`);

        let playAgainResponse = prompt("Play again? (y/n): ").toLowerCase();
        playAgain = playAgainResponse === "y" || playAgainResponse === "yes";
    }

    console.log("Thanks for playing!");
}

game();