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
scoreTwo = 0;
scoreOneP.textContent = `Your Score: ${scoreOne}`;
scoreTwoP.textContent = `Your Score: ${scoreTwo}`;
bttnRollTwo.disabled = true;
bttnHoldTwo.disabled = true;
bttnRollOne.disabled = true;
bttnHoldOne.disabled = true;
playerOne.style.opacity = "0.5";
playerTwo.style.opacity = "0.5";
diceOne.setAttribute("src", "./images/placeholderDice.png");
diceTwo.setAttribute("src", "./images/placeholderDice.png");

bttnReset.addEventListener("click", () => {
    scoreOne = 0;
    scoreTwo = 0;
    scoreOneP.textContent = 0;
    scoreTwoP.textContent = 0;
    bttnRollOne.disabled = false;
    bttnHoldOne.disabled = false;
    bttnRollTwo.disabled = true;
    bttnHoldTwo.disabled = true;
    playerOne.style.opacity = "1";
    playerTwo.style.opacity = "0.5";
    diceOne.setAttribute("src", "./images/placeholderDice.png");
    diceTwo.setAttribute("src", "./images/placeholderDice.png");
    winLose.textContent = "Player 1's Turn";
    winLose.style.color = "#63109e ";
})

bttnHoldOne.addEventListener("click", () => {
    bttnRollTwo.disabled = false;
    bttnHoldTwo.disabled = false;
    bttnRollOne.disabled = true;
    bttnHoldOne.disabled = true;
    playerOne.style.opacity = "0.5";
    playerTwo.style.opacity = "1";
    winLose.textContent = "Player 2's Turn";
    winLose.style.color = "#bf6008";
})

bttnHoldTwo.addEventListener("click", () => {
    bttnRollOne.disabled = false;
    bttnHoldOne.disabled = false;
    bttnRollTwo.disabled = true;
    bttnHoldTwo.disabled = true;
    playerTwo.style.opacity = "0.5";
    playerOne.style.opacity = "1";
    winLose.textContent = "Player 1's Turn";
    winLose.style.color = "#63109e ";
})

bttnRollOne.addEventListener("click", () => {
    let num = Math.ceil(Math.random() * 6);
    if (num === 1) {
        diceOne.setAttribute("src", "./images/diceFace1.png");
        scoreOne = 0;
        scoreOneP.textContent = "Your Score: X";
        winLose.textContent = "Player 1 has rolled a 1 - Player 2's turn!"
        winLose.style.color = "#bf6008";
        bttnRollTwo.disabled = false;
        bttnHoldTwo.disabled = false;
        bttnRollOne.disabled = true;
        bttnHoldOne.disabled = true;
        playerOne.style.opacity = "0.5";
        playerTwo.style.opacity = "1";
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
        winLose.style.color = "63109e ";
        bttnRollTwo.disabled = true;
        bttnHoldTwo.disabled = true;
        bttnRollOne.disabled = true;
        bttnHoldOne.disabled = true;
        playerOne.style.opacity = "0.5";
        playerTwo.style.opacity = "0.5";
    }
})

bttnRollTwo.addEventListener("click", () => {
    let num = Math.ceil(Math.random() * 6);
    if (num === 1) {
        diceTwo.setAttribute("src", "./images/diceFace1.png");
        scoreTwo = 0;
        scoreTwoP.textContent = "Your Score: X";
        winLose.textContent = "Player 2 has rolled a 1 - Player 1's turn!";
        winLose.style.color = "#63109e";
        bttnRollOne.disabled = false;
        bttnHoldOne.disabled = false;
        bttnRollTwo.disabled = true;
        bttnHoldTwo.disabled = true;
        playerOne.style.opacity = "1";
        playerTwo.style.opacity = "0.5";
    } else if (num === 2) {
        diceTwo.setAttribute("src", "./images/diceFace2.png");
        scoreTwo += 2;
        scoreTwoP.textContent = `Your Score: ${scoreTwo}`;
    } else if (num === 3) {
        diceTwo.setAttribute("src", "./images/diceFace3.png");
        scoreTwo += 3;
        scoreTwoP.textContent = `Your Score: ${scoreTwo}`;
    } else if (num === 4) {
        diceTwo.setAttribute("src", "./images/diceFace4.png");
        scoreOne += 4;
        scoreTwoP.textContent = `Your Score: ${scoreTwo}`;
    } else if (num === 5) {
        diceTwo.setAttribute("src", "./images/diceFace5.png");
        scoreTwo += 5;
        scoreTwoP.textContent = `Your Score: ${scoreTwo}`;
    } else if (num === 6) {
        diceTwo.setAttribute("src", "./images/diceFace6.png");
        scoreTwo += 6;
        scoreTwoP.textContent = `Your Score: ${scoreTwo}`;
    }

    if (scoreTwo >= 21) {
        winLose.textContent = "Player 2 has won!"
        winLose.style.color = "#bf6008";
        bttnRollTwo.disabled = true;
        bttnHoldTwo.disabled = true;
        bttnRollOne.disabled = true;
        bttnHoldOne.disabled = true;
        playerOne.style.opacity = "0.5";
        playerTwo.style.opacity = "0.5";
    }
})