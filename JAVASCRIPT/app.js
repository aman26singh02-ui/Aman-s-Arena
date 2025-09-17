let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw game
const drawGame = () => {
  msg.innerText = "Game was a draw!";
  msg.style.color = "black";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = 'You win! Your ${userChoice} beats ${compChoice}';
    msg.style.color = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = 'You lose! ${compChoice} beats your ${userChoice}';
    msg.style.color = "red";
  }
};

// Play game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // rock beats scissors, loses to paper
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      // paper beats rock, loses to scissors
      userWin = compChoice === "rock";
    } else {
      // scissors beats paper, loses to rock
      userWin = compChoice === "paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listeners
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});