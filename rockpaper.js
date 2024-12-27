// it is made by Ajkouva
// Date: 27th December 2024

let Score ={
    wins: 0,
    losses: 0,
    draw: 0
};

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Player Win = ${Score.wins} | Computer Win = ${Score.losses} | Draws = ${Score.draw}`
};

function result(playerChoice) {
    const computerChoice = computerMove();
    let gameResult ='';
    let cssresult = document.querySelector('.css-result');

    if (playerChoice === computerChoice) {
        gameResult = 'Draw';
        cssresult.style.backgroundColor = 'gray'; 
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        gameResult = 'You win';
        cssresult.style.backgroundColor = 'green';
    } else {
        gameResult = 'You lose';
        cssresult.style.backgroundColor = 'red';
    }
    
    if (gameResult === 'You win') {
        Score.wins++;
    } else if (gameResult === 'You lose') {
        Score.losses++;
    } else if (gameResult === 'Draw') {
        Score.draw++;
    }


    updateScore();
    document.querySelector('.js-result').innerHTML = `You pick ${playerChoice} | Computer pick ${computerChoice} | ${gameResult}`
};

function computerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
};