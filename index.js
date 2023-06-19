/*
function computerPlay() {
  const pick = ['rock', 'paper', 'scissors'];
  return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
     return `It's a tie! you both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
     return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
     return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
     return "You win! Scissors beats Paper";
  } else {
     return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
*/

let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"
