'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let scoreCountDown = 20;
let highScore = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When the input of the user is invalid//
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = '⛔ Not a valid number';
  }

  //When the guess is correct
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //When guess the score has reached a score of 0//
  if (scoreCountDown === 1) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    return (document.querySelector('.score').textContent = '1');
  }

  //subtracts the scorecountdown until it reaches 0//
  if (guess !== secretNumber) {
    scoreCountDown--;
    highScore--;
    document.querySelector('.score').textContent = scoreCountDown;
  }

  //highest score//
  if (
    guess === secretNumber &&
    scoreCountDown > document.querySelector('.highscore').textContent
  ) {
    document.querySelector('.highscore').textContent = scoreCountDown;
  }

  //When guess is too high or low//
  if (guess > secretNumber && guess <= 20) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber && guess > 0) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});

//Reset botton "Again"//
document.querySelector('.btn').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreCountDown = 20;
  document.querySelector('.score').textContent = scoreCountDown;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});

//problem #1: When "Again" is clicked we want to reset the score but not the highscore!//

//1. Make the "Again" button be usable via the "AddEventListener"// ---> COMPLETED
//2. Reset the score & the green background(if any) whenever the "Again" button is clicked// ----> COMPLETED
//3. Keep the Higscore the same whenever the "Again" button is clicked// ----> COMPLETED
