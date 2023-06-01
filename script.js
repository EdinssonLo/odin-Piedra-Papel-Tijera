const body = document.querySelector("body");
const h1Round = document.createElement("h1");
const h1Score = document.createElement("h1");
const divMsnWin = document.querySelector('.win');

const elements = ["rock", "paper", "scissors"];
let pointsPlayer = 0;
let pointsComputer = 0;

const getComputerChoice = () => {
  const aleatorio = elements[Math.floor(Math.random() * elements.length)];
  return aleatorio;
};

const getPlayerChoice = (player) => {
  const aleatorio = player;
  return aleatorio.toLowerCase();
};

const messageWin = (player) => {
   let mensaje = (player === 1) ? "Computer Win! " : "You win! ";
   if(player===1){
    mensaje = "Computer Win! ";
    divMsnWin.classList.remove('player')
    divMsnWin.classList.add('computer')
   }
   else if(player===2){
    mensaje =  "You win! "
    divMsnWin.classList.remove('computer')
    divMsnWin.classList.add('player')
   }else{
    divMsnWin.classList.remove('player')
    divMsnWin.classList.remove('computer')
    mensaje ="Empate"
   }
   divMsnWin.textContent=mensaje;
};

const playRound = (computerSelection, playerSelection) => {
  let mensajeGanador;
  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    messageWin(1);
    pointsComputer++;
  } else if (
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper")
  ) {
    messageWin(2);
    pointsPlayer++;
  }else {
    messageWin(3);
  }

  
};

const game = (e) => {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice(e.target.alt);
  playRound(computerSelection, playerSelection);
  round(playerSelection, computerSelection);
};

const round = (player, computer) => {
  console.log(player + " aqui " + computer);
  h1Round.classList.add("move");
  h1Round.textContent = player + " Vs " + computer;
  body.appendChild(h1Round);
  score(pointsPlayer, pointsComputer);
};

const score = (pointsPlayer, pointsComputer) => {
  h1Score.classList.add("move");
  h1Score.textContent =
    " Player: " + pointsPlayer + " Computer: " + pointsComputer;
  body.appendChild(h1Score);
  
};



const cards = Array.from(document.querySelectorAll(".card"));
cards.forEach((card) =>
  card.addEventListener("click", function (e) {
    game(e);
  })
);

//game();
