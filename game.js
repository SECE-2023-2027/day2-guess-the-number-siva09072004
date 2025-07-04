let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber); 



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = ' No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? ' Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' You lost the game!';
            document.querySelector('.score').textContent = 0;
             document.body.style.backgroundColor = 'red';
            
        }
    }
     
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = 'blue';
});