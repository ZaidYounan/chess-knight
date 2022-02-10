import React from 'react';
import Square from './Square';
import './stylesheets/Board.css';

const horizontalAxis= ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const initialKnightPosition = { 
    xKnightPosition: horizontalAxis[Math.floor((Math.random() * 7) + 0)],
    yKnightPosition: verticalAxis[Math.floor((Math.random() * 7) + 0)]
}

let victorySquare = null;
(function () {
    while (victorySquare == null || victorySquare == `${initialKnightPosition.xKnightPosition}${initialKnightPosition.yKnightPosition}`) {
        let xVictoryPosition = horizontalAxis[Math.floor((Math.random() * 7) + 0)];
        let yVictoryPosition = verticalAxis[Math.floor((Math.random() * 7) + 0)];
        return victorySquare = `${xVictoryPosition}${yVictoryPosition}`
    }
})();

console.log(victorySquare)

console.log(`${initialKnightPosition.xKnightPosition}${initialKnightPosition.yKnightPosition}`)

function Board() {
    let board = [];


    for (let i = verticalAxis.length - 1; i >= 0; i--) {
      for (let k = 0; k < horizontalAxis.length; k++) {

        let keyProp = `${horizontalAxis[k]}${verticalAxis[i]}`

        board.push(<Square key={keyProp} {...{k, i, keyProp, board, initialKnightPosition, victorySquare}}/>
        );
      }
    }

    return <div className="Board">{board}</div>;
}

export default Board;