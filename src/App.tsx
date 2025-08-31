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
  const [scoreHeader, setScoreHeader] = useState('');
  const [scoreText, setScoreText] = useState('');
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
    setScoreHeader('');
    setScoreText('');
    playerSign.textContent = '';
    computerSign.textContent = '';
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
    const chosenOption = options[randomValue];
    setPlayerChoice(choice);
    setComputerChoice(chosenOption);
    setPlayerWeapon(getChoices(choice));
    setComputerWeapon(getChoices(chosenOption));


    if(choice === chosenOption) {
        setScoreHeader('TIE');
        setScoreText('');
    }
    if(
        (choice === 'rock' && chosenOption === 'scissors') || 
        (choice === 'paper' && chosenOption === 'rock') || 
        (choice === 'scissors' && chosenOption === 'paper')
    ) {
        setPlayerScore(playerScore + 1);
        setScoreHeader('VICTORY');
        setScoreText(`${choice} beats ${chosenOption}`);
    }
     if(
        (chosenOption === 'rock' && choice === 'scissors') || 
        (chosenOption === 'paper' && choice === 'rock') || 
        (chosenOption === 'scissors' && choice === 'paper')
    ) {
        setComputerScore(computerScore + 1);
        setScoreHeader('DEFEAT');
        setScoreText(`${choice} can't beat ${chosenOption}`);
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
        scoreHeader={scoreHeader}
        scoreText={scoreText}
      />
      <Modal restartGame={restartGame} />
      <Overlay />
    </>
  )
}

export default App
