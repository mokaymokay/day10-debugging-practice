let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
  return array[(Math.floor(Math.random()*3)) ]; // changed from ceil to floor so returns [0,1,2]
}

function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  };

  let computerChoice = randomFrom(computerChoices);

  if (input !== "scissors" && input !== "paper" && input !== "rock") {
    alert("Please enter a valid input: rock/paper/scissors, or quit to stop playing. ");
    return false;
  } else if (computerChoice === "rock" && input === "scissors") {
    alert(`You chose ${input} and the computer chose ${computerChoice}.\nComputer wins!`);
    return false;
  } else if (computerChoice === "scissors" && input === "paper") {
    alert(`You chose ${input} and the computer chose ${computerChoice}.\nComputer wins!`);
    return false;
  } else if (computerChoice === "paper" && input === "rock") {
    alert(`You chose ${input} and the computer chose ${computerChoice}.\nComputer wins!`);
    return false;
  } else if (computerChoice === input) {
    alert(`You chose ${input} and the computer chose ${computerChoice}.\nIt's a tie!`); // added scenario when user ties with computer
    return false;
  } else {
    alert(`You chose ${input} and the computer chose ${computerChoice}.\nYou win!`); // added scenario when user wins
    return false;
  };
}

function start(gameOver, computerChoices) {
  while (!gameOver) {
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    gameOver = checkInput(playerInput, computerChoices);
    // playerInput = "paper";
    // gameOver = true;
    }
}

start(gameOver, computerChoices);
