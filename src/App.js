import './App.css';
import Board from './components/Board.js';
import React, { useState } from 'react';

function App() {
  const [game, setGame] = useState(false);

  const handleClick = () => setGame(!game);

  function renderBoard() {
    if (game) {
      return <Board/>
    } else {
      return <div className="PlayButton" onClick={handleClick} >PLAY</div>
    }
  }

  console.log(game);
  return (
    <div className="App">
      {renderBoard()}
    </div>
  );
}

export default App;
