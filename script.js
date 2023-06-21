let playerPoints = document.getElementById('player-points');
let computerPoints = document.getElementById('computer-points');
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));


function playRound(playerChoice) {
    let options = ['rock', 'paper', 'scissors'];
    const randomValue = Math.floor(Math.random() * 3);
    const computerChoice = options[randomValue];

    if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'paper')    
    ) {
        playerScore += 1;
        playerPoints.textContent = playerScore;
    }
    if(
        (computerChoice === 'rock' && playerChoice === 'scissors') || 
        (computerChoice === 'paper' && playerChoice === 'rock') || 
        (computerChoice === 'scissors' && playerChoice === 'paper')
    ) {
        computerScore += 1;
        computerPoints.textContent = computerScore;
    }
}
