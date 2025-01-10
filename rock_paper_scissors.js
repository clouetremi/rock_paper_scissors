function randomNumber() {
  return Math.floor(Math.random() * 3);
};


function getComputerChoice() {
  const choice = randomNumber();
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  };
};

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("that's a tie");
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")) {
    console.log(`you choose ${humanSelection} so you win against ${computerSelection}`);
    humanScore++;
  } else if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")) {
    console.log(`you choose ${humanSelection} so you lose against ${computerSelection}`);
    computerScore++;
  }
};

// variables générales pour mon jeu 
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection = getComputerChoice();
let winnerIs = "";

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {

  humanSelection = "rock";
  computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  showGameResult();
  showGameScore();
  announceWinner()
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {

  humanSelection = "paper";
  computerSelection = getComputerChoice()

  playRound(humanSelection, computerSelection)
  showGameResult();
  showGameScore();
  announceWinner()
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {

  humanSelection = "scissors";
  computerSelection = getComputerChoice()

  playRound(humanSelection, computerSelection)
  showGameResult();
  showGameScore();
  announceWinner()
});

// Add a div for displaying results and change all of your console.logs into DOM methods.


function showGameResult() {
  let resultGame = document.querySelector(".resultGame");
  resultGame.innerText = `you choose ${humanSelection} against ${computerSelection}`;
};

// Display the running score, and announce a winner of the game once one player reaches 5 points.

function showGameScore() {
  let gameScore = document.querySelector(".scoreGame");
  gameScore.innerText = `your current score : ${humanScore} against computer score : ${computerScore}`;
}

function announceWinner() {
  let winnerAnnoucement = document.querySelector(".winnerAnnouncement");
  let displayWinner = document.createElement("h1");

  winnerAnnoucement.innerHTML = ""; 
  if (humanScore === 5) {;
        displayWinner.innerText = `Human is the winner of this game`;
  } else if (computerScore === 5) {
    let winnerAnnoucement = document.querySelector(".winnerAnnouncement");
    displayWinner.innerText = `Computer is the winner of this game`;
  };
  winnerAnnoucement.appendChild(displayWinner);
};