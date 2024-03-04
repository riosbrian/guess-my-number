import './style.css';

const number = document.querySelector('.secret-number');
const btnCheck = document.querySelector('.btn--check');
const btnReset = document.querySelector('.btn--reset');
const message = document.querySelector('.game-info__message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');

const MESSAGE_DICTIONARY = {
  error: '⛔ No number!',
  correct: '🎉 Correct number!',
  tooHigh: '⬆️ Too high!',
  toolow: '⬇️ Too low',
  gameover: '💣 You lose the game',
};

function randomNumber() {
  return Math.ceil(Math.random() * 20);
}

let secretNumber = randomNumber();
let attempts = 20;

const resetGame = () => {
  secretNumber = randomNumber();
  attempts = 20;
  scoreDisplay.textContent = attempts;
  number.textContent = '?';
  document.querySelector('.check__input').value = '';
  document.querySelector('body').style.backgroundColor = '#9face6';
};

btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.check__input').value);
  if (!guess) return (message.textContent = MESSAGE_DICTIONARY.error);

  if (guess === secretNumber) {
    message.textContent = MESSAGE_DICTIONARY.correct;
    number.textContent = secretNumber;
    highscoreDisplay.textContent = attempts;
    document.querySelector('body').style.backgroundColor = '#74ebd5';
    if (attempts > highscoreDisplay.textContent)
      highscoreDisplay.textContent = attempts;
    return;
  }

  if (attempts === 1) {
    message.textContent = MESSAGE_DICTIONARY.gameover;
    scoreDisplay.textContent = 0;
    return;
  }

  if (guess > secretNumber) {
    message.textContent = MESSAGE_DICTIONARY.tooHigh;
    attempts--;
    scoreDisplay.textContent = attempts;
  }

  if (guess < secretNumber) {
    message.textContent = MESSAGE_DICTIONARY.toolow;
    attempts--;
    scoreDisplay.textContent = attempts;
  }
});

btnReset.addEventListener('click', () => {
  resetGame();
});
