const options = ["rock", "paper", "scissors"];

const computerDisplay = document.querySelector(".computer-display");
const playerDisplay = document.querySelector(".human-display");
const result = document.getElementById("result");
const cScore = document.getElementById("cScore");
const hScore = document.getElementById("hScore");

let i = 0; // Computer score
let j = 0; // Human score

// Helper to get computer choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    // Emoji mapping
    const emojis = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️"
    };

    playerDisplay.textContent = `You Chose ${emojis[playerChoice]}`;
    computerDisplay.textContent = `Computer Chose ${emojis[computerChoice]}`;

    if (playerChoice === computerChoice) {
        result.textContent = "🤝 IT'S A TIE!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = "🏆 YOU WIN!";
        j++;
        hScore.textContent = j;
    } else {
        result.textContent = "💀 YOU LOSE!";
        i++;
        cScore.textContent = i;
    }
}
