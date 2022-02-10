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
    while (victorySquare === null || victorySquare === `${initialKnightPosition.xKnightPosition}${initialKnightPosition.yKnightPosition}`) {
        let xVictoryPosition = horizontalAxis[Math.floor((Math.random() * 7) + 0)];
        let yVictoryPosition = verticalAxis[Math.floor((Math.random() * 7) + 0)];
        return victorySquare = `${xVictoryPosition}${yVictoryPosition}`
    }
})();

let knightActive = null;


function grabKnight(e) {
    if (e.target.classList.contains("Knight")) {
        const x = e.clientX -37.5;
        const y = e.clientY -37.5;
        e.target.style.position = "absolute";
        e.target.style.left = `${x}px`;
        e.target.style.top = `${y}px`;
        knightActive = e.target; 
    }
}

function moveKnight(e) {
    if (knightActive && knightActive.classList.contains("Knight")) {
        const x = e.clientX -37.5;
        const y = e.clientY -37.5;
        knightActive.style.position = "absolute";
        knightActive.style.left = `${x}px`;
        knightActive.style.top = `${y}px`;
    }
}

function dropKnight(e) {
    if (knightActive) {
        knightActive = null;
    }
}

function Board() {
    let board = [];


    for (let i = verticalAxis.length - 1; i >= 0; i--) {
      for (let k = 0; k < horizontalAxis.length; k++) {

        let keyProp = `${horizontalAxis[k]}${verticalAxis[i]}`

        board.push(<Square key={keyProp} {...{k, i, keyProp, initialKnightPosition, victorySquare}}/>
        );
      }
    }

    return <div onMouseDown={e => grabKnight(e)} onMouseMove={e => moveKnight(e)} onMouseUp={e => dropKnight(e)} className="Board">{board}</div>;
}

export default Board;