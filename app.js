const playerOne = document.getElementById("playerOne");
const scoreOneP = document.getElementById("scoreOneP");
const diceOne = document.getElementById("diceOne");
const bttnRollOne = document.getElementById("bttnRollOne");
const bttnHoldOne = document.getElementById("bttnHoldOne");
const gameOne = document.getElementById("gameOne");

const playerTwo = document.getElementById("playerTwo");
const scoreTwoP = document.getElementById("scoreTwoP");
const diceTwo = document.getElementById("diceTwo");
const bttnRollTwo = document.getElementById("bttnRollTwo");
const bttnHoldTwo = document.getElementById("bttnHoldTwo");
const gameTwo = document.getElementById("gameTwo");

const bttnReset = document.getElementById("bttnReset");
const winLose = document.getElementById("winLose")


scoreOne = 0;
scoreOneP.textContent = scoreOne

diceOne.setAttribute("src", "./images/placeholderDice.png");
diceTwo.setAttribute("src", "./images/placeholderDice.png");

bttnReset.addEventListener("click", () => {
    scoreOne = 0;
    scoreTwo = 0;
    scoreOneP.textContent = 0;
    scoreTwoP.textContent = 0;
    diceOne.setAttribute("src", "./images/placeholderDice.png");
    diceTwo.setAttribute("src", "./images/placeholderDice.png");
    winLose.textContent = "Player 1's Turn"
})

bttnRollOne.addEventListener("click", () => {
    let num = Math.ceil(Math.random() *6);
    if (num === 1) {
        diceOne.setAttribute("src", "./images/diceFace1.png");
        scoreOne = 0;
        scoreOneP.textContent = "Your Score: X";
        winLose.textContent = "Player 1 has lost!"
      } else if (num === 2) {
        diceOne.setAttribute("src", "./images/diceFace2.png");
        scoreOne += 2;
        scoreOneP.textContent = `Your Score: ${scoreOne}`;
      } else if (num === 3) {
        diceOne.setAttribute("src", "./images/diceFace3.png");
        scoreOne += 3;
        scoreOneP.textContent = `Your Score: ${scoreOne}`;
      } else if (num === 4) {
        diceOne.setAttribute("src", "./images/diceFace4.png");
        scoreOne += 4;
        scoreOneP.textContent = `Your Score: ${scoreOne}`;
      } else if (num === 5) {
        diceOne.setAttribute("src", "./images/diceFace5.png");
        scoreOne += 5;
        scoreOneP.textContent = `Your Score: ${scoreOne}`;
      } else if (num === 6) {
        diceOne.setAttribute("src", "./images/diceFace6.png");
        scoreOne += 6;
        scoreOneP.textContent = `Your Score: ${scoreOne}`;
      }
    
      if (scoreOne >= 21) {
        winLose.textContent = "Player 1 has won!"
      }
})
