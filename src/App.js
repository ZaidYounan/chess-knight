import './App.css';
import Board from './components/Board.js';
import React, { useState } from 'react';

function App() {
  const [game, setGame] = useState(false);
  const [victory, setVictory] = useState(false);

  const handleClick = () => setGame(!game);

  function renderVictory() {
    if (victory) {
        return <div className="Final"><p>YOU WON!!</p><button className="Replay" onClick={() => {setGame(false); setVictory(false);}}>Play again?</button></div>
    }
  } 

  function renderBoard() {
    if (game) {
      return <Board {...{victory, setVictory, game}}/>
    } else {
      return <div className="PlayButton" onClick={handleClick}>PLAY</div>
    }
  }

  return (
    <div className="App">
      {renderVictory()}
      {renderBoard()}
    </div>
  );
}

export default App;
