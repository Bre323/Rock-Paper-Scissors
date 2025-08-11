let playerPoints = document.getElementById('player-points');
let computerPoints = document.getElementById('computer-points');
let scoreHeader = document.getElementById('score-header');
let scoreText = document.getElementById('score-text');
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let restartButton = document.getElementById('restart-button');
let playerSign = document.getElementById('player-sign');
let computerSign = document.getElementById('computer-sign');
let modal = document.getElementById('modal');
let modalMessage = document.getElementById('modal-message');
let overlay = document.getElementById('overlay');
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
restartButton.addEventListener('click', () => restartGame());


function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    
    if(playerScore > computerScore) {
        modalMessage.textContent = 'You Won!';
    }
    else {
        modalMessage.textContent = 'You Lose!';
    }
}

function restartGame() {
    modal.classList.remove('active');
    overlay.classList.remove('active');

    playerScore = 0;
    computerScore = 0;
    playerPoints.textContent = 0;
    computerPoints.textContent = 0;
    playerSign.textContent = '';
    computerSign.textContent = '';
    scoreHeader.textContent = '';
    scoreText.textContent = '';
}

function getChoices(choice) {
    switch(choice) {
        case 'rock':
            return '👊';
        case 'paper':
            return '🤚';
        case 'scissors':
            return '✌️';
    }
}

function playRound(playerChoice) {
    let options = ['rock', 'paper', 'scissors'];
    const randomValue = Math.floor(Math.random() * 3);
    const computerChoice = options[randomValue];


    if(playerChoice === computerChoice) {
        scoreHeader.textContent = 'TIE';
        scoreText.textContent = '';
    }
    if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'paper')    
    ) {
        playerScore += 1;
        playerPoints.textContent = playerScore;
        scoreHeader.textContent = 'VICTORY';
        scoreText.textContent = `${playerChoice} beats ${computerChoice}`;
    }
    if(
        (computerChoice === 'rock' && playerChoice === 'scissors') || 
        (computerChoice === 'paper' && playerChoice === 'rock') || 
        (computerChoice === 'scissors' && playerChoice === 'paper')
    ) {
        computerScore += 1;
        computerPoints.textContent = computerScore;
        scoreHeader.textContent = 'DEFEAT';
        scoreText.textContent = `${playerChoice} can't beat ${computerChoice}`;
    }

    playerSign.textContent = getChoices(playerChoice);
    computerSign.textContent = getChoices(computerChoice);

    if(isGameOver()) {
        openModal();
    }
}