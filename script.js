const elements = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const aleatorio = elements[Math.floor(Math.random() * elements.length)];
  return aleatorio;
};

const getPlayerChoice = () => {
  const aleatorio = prompt("Enter you'r option Rock, paper or scissors", "");
  return aleatorio.toLowerCase();
};

const messageWin = (win, lose, player) => {
  let message;
  if (player === 1) {
    message = "You Lose! " + win + " beats " + lose;
  } else {
    message = "You win! " + win + " beats " + lose;
  }
  return message;
};

const playRound = (computerSelection, playerSelection) => {
  let mensajeGanador;
  if (computerSelection == "rock" && playerSelection == "scissors") {
    return (mensajeGanador = messageWin(computerSelection, playerSelection, 1));
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    return (mensajeGanador = messageWin(playerSelection, computerSelection, 2));
  }
  if (computerSelection == "scissors" && playerSelection == "paper") {
    return (mensajeGanador = messageWin(computerSelection, playerSelection, 1));
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return (mensajeGanador = messageWin(playerSelection, computerSelection, 2));
  }
  if (computerSelection == "paper" && playerSelection == "rock") {
    return (mensajeGanador = messageWin(computerSelection, playerSelection, 1));
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return (mensajeGanador = messageWin(playerSelection, computerSelection, 1));
  }
};

const game = () => {
  for (let index = 0; index < 5; index++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playRound(computerSelection, playerSelection));
  }
};

game();
