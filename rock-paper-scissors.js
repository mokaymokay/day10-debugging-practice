let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
  return array[(Math.floor(Math.random()*3)) ]; // changed from ceil to floor so returns [0,1,2]
}

function checkInput(input, computerChoices) {
  let computerChoice = randomFrom(computerChoices);
  let choices = `You chose ${input} and the computer chose ${computerChoice}.`; // added choices statement for reuse

  if (input === "quit") {
    return true;
  };

  if (input !== "scissors" && input !== "paper" && input !== "rock") {
    alert("Please enter a valid input: rock/paper/scissors, or quit to stop playing. ");
  } else if (computerChoice === "rock" && input === "scissors") {
    alert(choices + " Computer wins!");
  } else if (computerChoice === "scissors" && input === "paper") {
    alert(choices + " Computer wins!");
  } else if (computerChoice === "paper" && input === "rock") {
    alert(choices + " Computer wins!");
  } else if (computerChoice === input) {
    alert(choices + " It's a tie!"); // added scenario when user ties with computer
  } else {
    alert(choices + " You win!"); // added scenario when user wins
  };
  return false;
}

function start(gameOver, computerChoices) {
  while (!gameOver) {
    // assigned player input to prompt instead of empty string
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    gameOver = checkInput(playerInput, computerChoices);
    // playerInput = "paper";
    // gameOver = true;
    }
}

start(gameOver, computerChoices);
