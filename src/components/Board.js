import React from 'react';
import './stylesheets/Board.css';

const horizontalAxis= ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Board() {
    let board = [];

    function tileColour(axisOne, axisTwo) {
        const number = axisOne + axisTwo + 2;
        
        if (number % 2 === 0) {
            return "Light-Tile"
        } else {
            return "Dark-Tile"
        }
    }

    for (let i = verticalAxis.length - 1; i >= 0; i--) {
      for (let k = 0; k < horizontalAxis.length; k++) {
        
        board.push(
            <div className={`Square ${tileColour(k, i)}`} key={`${horizontalAxis[k]}${verticalAxis[i]}`}>{horizontalAxis[k]}{verticalAxis[i]}</div>
        );
      }
    }
    console.log(board)

    return <div className="Board">{board}</div>;
}

