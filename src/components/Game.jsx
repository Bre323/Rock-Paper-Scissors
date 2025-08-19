const Game = () => {
  return (
    <>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>

      <main>
        <div class="main-text">
            <h2>Choose your weapon</h2>
            <p>First to 5 wins the game</p>
        </div>

        <div class="weapons">
            <button id="rock" class="rock">👊</button>
            <button id="paper" class="paper">🤚</button>
            <button id="scissors" class="scissors">✌️</button>
        </div>

        <div class="result">
            <div class="score">
                <p>Player: <span id="player-points">0</span></p>
                <div id="player-sign" class="sign"></div>
            </div>

            <div class="score">
                <p>Computer: <span id="computer-points">0</span></p>
                <div id="computer-sign" class="sign"></div>
            </div>
        </div>

        <div class="score-message">
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
