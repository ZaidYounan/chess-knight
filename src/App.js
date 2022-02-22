import './App.css';
import Board from './components/Board.js';
import React, { useState } from 'react';

function App() {
  const [game, setGame] = useState(false);
  const [victory, setVictory] = useState(false);
  const [help, setHelp] = useState(false);

  const handleClick = () => setGame(!game);
  
  const handleHelpClick = () => {setHelp(true)}

  function renderVictory() {
    if (victory) {
        return <div className="Final"><p>YOU WON!!</p><button className="Replay" onClick={() => {setGame(false); setVictory(false);}}>Play again?</button></div>
    }
  } 

  function renderBoard() {
    if (game) {
      return <div className="Main"><Board {...{victory, setVictory, game, help, setHelp}}/><div onClick={handleHelpClick} className="HelpButton">Help!</div></div>
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
