import '../styles/Game.css';

interface GameProps {
  playRound: (playerChoice: string) => void;
}

const Game: React.FC<GameProps> = ({ playRound }) => {
  return (
    <>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>

      <main>
        <div className="main-text">
            <h2>Choose your weapon</h2>
            <p>First to 5 wins the game</p>
        </div>

        <div className="weapons">
            <button id="rock" className="rock" onClick={() => playRound('👊')}>👊</button>
            <button id="paper" className="paper" onClick={() => playRound('🤚')}>🤚</button>
            <button id="scissors" className="scissors" onClick={() => playRound('✌️')}>✌️</button>
        </div>

        <div className="result">
            <div className="score">
                <p>Player: <span id="player-points">0</span></p>
                <div id="player-sign" className="sign"></div>
            </div>

            <div className="score">
                <p>Computer: <span id="computer-points">0</span></p>
                <div id="computer-sign" className="sign"></div>
            </div>
        </div>

        <div className="score-message">
            <h2 id="score-header"></h2>
            <p id="score-text"></p>
        </div>
      </main>

      <footer>
        Copyright &copy; The Odin Project 2021
      </footer>
    </>
  );
}

export default Game;
