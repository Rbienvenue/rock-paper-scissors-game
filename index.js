const options = ["rock", "paper", "scissors"];

const computerDisplay = document.querySelector(".computer-display");
const playerDisplay = document.querySelector(".human-display");
const result = document.getElementById("result");
const cScore = document.getElementById("cScore");
const hScore = document.getElementById("hScore");
const roundNumber = document.getElementById("roundNumber");

// Sounds
const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.mp3");
const tieSound = new Audio("tie.mp3");

let i = 0; // Computer score
let j = 0; // Human score
let round = 1; // Round counter

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    const emojis = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️"
    };

    playerDisplay.textContent = `You Chose ${emojis[playerChoice]}`;
    computerDisplay.textContent = `Computer Chose ${emojis[computerChoice]}`;

    let outcome;

    if (playerChoice === computerChoice) {
        outcome = "🤝 IT'S A TIE!";
        tieSound.play();
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        outcome = "🏆 YOU WIN!";
        winSound.play();
        j++;
        hScore.textContent = j;
    } else {
        outcome = "💀 YOU LOSE!";
        loseSound.play();
        i++;
        cScore.textContent = i;
    }

    result.textContent = outcome;

    // Trigger animation
    result.classList.remove("animate");
    void result.offsetWidth; // restart animation trick
    result.classList.add("animate");

    // Update round
    round++;
    roundNumber.textContent = round;
}

// Reset game (optional button)
function resetGame() {
    i = j = 0;
    round = 1;
    hScore.textContent = cScore.textContent = 0;
    roundNumber.textContent = round;
    result.textContent = "";
    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
}
