import React, { useRef } from 'react';
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

function Board() {
    const boardRef = useRef(null);

    let board = [];

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
        const boardObject = boardRef.current;

        if (knightActive && knightActive.classList.contains("Knight")) {

            const minHorizontal = boardObject.offsetLeft - 13;
            const minVertical = boardObject.offsetTop - 13;
            const maxHorizontal = boardObject.offsetWidth + boardObject.offsetLeft - 60;
            const maxVertical = boardObject.offsetHeight - 25;
            const x = e.clientX -37.5;
            const y = e.clientY -37.5;
            knightActive.style.position = "absolute";

            if (x < minHorizontal) {
                knightActive.style.left = `${minHorizontal}px`;
            } else if (x > maxHorizontal) {
                knightActive.style.left = `${maxHorizontal}px`;
            } else {
                knightActive.style.left = `${x}px`;
            }

            if (y < minVertical) {
                knightActive.style.top = `${minVertical}px`;
            } else if (y > maxVertical) {
                knightActive.style.top = `${maxVertical}px`;
            }
            else {
                knightActive.style.top = `${y}px`;
            }
        }
    }

    function dropKnight() {
        if (knightActive) {
            knightActive = null;
        }
    }

    for (let i = verticalAxis.length - 1; i >= 0; i--) {
      for (let k = 0; k < horizontalAxis.length; k++) {

        let keyProp = `${horizontalAxis[k]}${verticalAxis[i]}`

        board.push(<Square key={keyProp} {...{k, i, keyProp, initialKnightPosition, victorySquare}}/>
        );
      }
    }

    return <div ref={boardRef} onMouseDown={e => grabKnight(e)} onMouseMove={e => moveKnight(e)} onMouseUp={() => dropKnight()} className="Board">{board}</div>;
}

export default Board;