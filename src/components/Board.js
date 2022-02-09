import React from 'react';
import Square from './Square';
import './stylesheets/Board.css';

const horizontalAxis= ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const knightPosition = { 
    xPosition: horizontalAxis[Math.floor((Math.random() * 7) + 0)],
    yPosition: verticalAxis[Math.floor((Math.random() * 7) + 0)]
}

function Board() {
    let board = [];
    console.log(knightPosition)
    for (let i = verticalAxis.length - 1; i >= 0; i--) {
      for (let k = 0; k < horizontalAxis.length; k++) {

        let keyProp = `${horizontalAxis[k]}${verticalAxis[i]}`

        board.push(<Square key={keyProp} {...{k, i, keyProp, board, knightPosition}}/>
        );
      }
    }

    return <div className="Board">{board}</div>;
}

export default Board;