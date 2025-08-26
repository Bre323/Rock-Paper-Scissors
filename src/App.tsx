import { useState } from 'react';
import Game from './components/Game';
import Modal from './components/Modal';
import Overlay from './components/Overlay';
import './App.css';


function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [playerWeapon, setPlayerWeapon] = useState('');
  const [computerScore, setComputerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState('');
  const [computerWeapon, setComputerWeapon] = useState('');
  let scoreHeader = document.getElementById('score-header') as HTMLHeadingElement;
  let scoreText = document.getElementById('score-text') as HTMLParagraphElement;
  let playerSign = document.getElementById('player-sign') as HTMLSpanElement;
  let computerSign = document.getElementById('computer-sign') as HTMLSpanElement;
  let modal = document.getElementById('modal') as HTMLDivElement;
  let modalMessage = document.getElementById('modal-message') as HTMLParagraphElement;
  let overlay = document.getElementById('overlay') as HTMLDivElement;


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
        modalMessage.textContent = 'You Lost!';
    }
  }

  function restartGame() {
    modal.classList.remove('active');
    overlay.classList.remove('active');

    setPlayerScore(0);
    setComputerScore(0);
    playerSign.textContent = '';
    computerSign.textContent = '';
    scoreHeader.textContent = '';
    scoreText.textContent = '';
  }

  function getChoices(choice: string) {
    switch(choice) {
      case 'rock':
        return '👊';
      case 'paper':
        return '🤚';
      case 'scissors':
        return '✌️';
      default:
        return '';
    }
  }

  function playRound(choice: string): void {
    let options = ['rock', 'paper', 'scissors'];
    const randomValue = Math.floor(Math.random() * 3);
    setPlayerChoice(choice);
    setComputerChoice(options[randomValue]);
    setPlayerWeapon(getChoices(choice));
    setComputerWeapon(getChoices(options[randomValue]));


    if(playerChoice === computerChoice) {
        scoreHeader.textContent = 'TIE';
        scoreText.textContent = '';
    }
    if(
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        setPlayerScore(prevScore => prevScore + 1);
        scoreHeader.textContent = 'VICTORY';
        scoreText.textContent = `${playerChoice} beats ${computerChoice}`;
    }
     if(
        (computerChoice === 'rock' && playerChoice === 'scissors') || 
        (computerChoice === 'paper' && playerChoice === 'rock') || 
        (computerChoice === 'scissors' && playerChoice === 'paper')
    ) {
        setComputerScore(prevScore => prevScore + 1);
        scoreHeader.textContent = 'DEFEAT';
        scoreText.textContent = `${playerChoice} can't beat ${computerChoice}`;
    }

    if(isGameOver()) {
        openModal();
    }
  }

  return (
    <>
      <Game 
        playRound={playRound} 
        playerScore={playerScore} 
        computerScore={computerScore}
        playerWeapon={playerWeapon}
        computerWeapon={computerWeapon}
      />
      <Modal restartGame={restartGame} />
      <Overlay />
    </>
  )
}

export default App
