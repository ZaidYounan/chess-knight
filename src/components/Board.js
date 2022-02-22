import React, { useRef, useState } from 'react';
import Square from './Square';
import './stylesheets/Board.css';

const horizontalAxis= ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

function Board(props) {
    const boardRef = useRef(null);
    const [knightPosition, setKnightPosition] = useState(() => {
        let initialKnight = '';
        let xKnightPosition = horizontalAxis[Math.floor((Math.random() * 7) + 0)];
        let yKnightPosition = verticalAxis[Math.floor((Math.random() * 7) + 0)];
        return initialKnight = `${xKnightPosition}${yKnightPosition}`
    });
    const [victorySquare, setVictorySquare] = useState(() => {
        let initialSquare = '';
        while (initialSquare === '' || initialSquare === knightPosition) {
                let xVictoryPosition = horizontalAxis[Math.floor((Math.random() * 7) + 0)];
                let yVictoryPosition = verticalAxis[Math.floor((Math.random() * 7) + 0)];
                return initialSquare = `${xVictoryPosition}${yVictoryPosition}`
            }
    })
    const [knightActive, setKnightActive] = useState(null);
    const currentHorizontalIndex = horizontalAxis.indexOf(knightPosition[0]);
    const currentVerticalIndex = verticalAxis.indexOf(knightPosition[1]);
    const {victory, setVictory, game, help, setHelp} = props;
    const validMoves = {
        validOne :`${horizontalAxis[currentHorizontalIndex + 1]}${verticalAxis[currentVerticalIndex + 2] }`,
        validTwo : `${horizontalAxis[currentHorizontalIndex + -1]}${verticalAxis[currentVerticalIndex + 2]}`,
        validThree : `${horizontalAxis[currentHorizontalIndex + 1]}${verticalAxis[currentVerticalIndex - 2]}`,
        validFour : `${horizontalAxis[currentHorizontalIndex - 1]}${verticalAxis[currentVerticalIndex - 2]}`,
        validFive : `${horizontalAxis[currentHorizontalIndex + 2]}${verticalAxis[currentVerticalIndex + 1]}`,
        validSix : `${horizontalAxis[currentHorizontalIndex - 2]}${verticalAxis[currentVerticalIndex + 1]}`,
        validSeven : `${horizontalAxis[currentHorizontalIndex + 2]}${verticalAxis[currentVerticalIndex - 1]}`,
        validEight : `${horizontalAxis[currentHorizontalIndex - 2]}${verticalAxis[currentVerticalIndex - 1]}`
        };

    const validMovesArray = Object.values(validMoves).filter(value => value.length == 2);
    
    console.log(victorySquare)

    let board = [];
    
    for (let i = verticalAxis.length - 1; i >= 0; i--) {
        for (let k = 0; k < horizontalAxis.length; k++) {
  
          let keyProp = `${horizontalAxis[k]}${verticalAxis[i]}`
  
          board.push(<Square key={keyProp} {...{k, i, keyProp, knightPosition, victorySquare, validMovesArray, knightActive}}/>
          );
        }
      }


    function grabKnight(e) {
        if (e.target.classList.contains("Knight")) {
            const x = e.clientX -37.5;
            const y = e.clientY -37.5;
            e.target.style.position = "absolute";
            e.target.style.left = `${x}px`;
            e.target.style.top = `${y}px`;
            setKnightActive(e.target); 
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


    function dropKnight(e) {

        if (knightActive) {
            const x = e.clientX;
            const y = e.clientY;
            let element = document.elementsFromPoint(x, y);
            let target = element[1];
            if (validMovesArray.includes(target.classList[2]) || target.classList[2] == knightPosition) {
                knightActive.style.position = "static";
                setKnightPosition(target.classList[2]);
                setKnightActive(null);
            } else if (target.classList[0] == "Victory" && validMovesArray.includes(target.classList[1])) {
                console.log("You won!")
                setVictory(true);
                setVictorySquare('');
                setKnightActive(null);
            } else {
                alert("That is not a valid move.");
            }
        }
    }

    ((validMovesArray) => {
        console.log(help)
        if (help === true) {
            // console.log(validMovesArray)
            for (let i = 0; i < validMovesArray.length; i++) {
                if (validMovesArray[i] === victorySquare) {
                    console.log("help used")
                    setKnightPosition(validMovesArray[i]);
                    setVictory(true);
                    setVictorySquare('');
                    setHelp(false);
                } else {
                    const fakePosition = validMovesArray[i];
                    const currentHorizontalAxis = horizontalAxis.indexOf(fakePosition[0]);
                    const currentVerticalAxis = verticalAxis.indexOf(fakePosition[1]);
                    let moveCount = [];
                    const moveArray = [];
                    const moveStore = {};
                    const validMoves = {
                        validOne :`${horizontalAxis[currentHorizontalAxis + 1]}${verticalAxis[currentVerticalAxis + 2] }`,
                        validTwo : `${horizontalAxis[currentHorizontalAxis + - 1]}${verticalAxis[currentVerticalAxis + 2]}`,
                        validThree : `${horizontalAxis[currentHorizontalAxis + 1]}${verticalAxis[currentVerticalAxis - 2]}`,
                        validFour : `${horizontalAxis[currentHorizontalAxis - 1]}${verticalAxis[currentVerticalAxis - 2]}`,
                        validFive : `${horizontalAxis[currentHorizontalAxis + 2]}${verticalAxis[currentVerticalAxis + 1]}`,
                        validSix : `${horizontalAxis[currentHorizontalAxis - 2]}${verticalAxis[currentVerticalAxis + 1]}`,
                        validSeven : `${horizontalAxis[currentHorizontalAxis + 2]}${verticalAxis[currentVerticalAxis - 1]}`,
                        validEight : `${horizontalAxis[currentHorizontalAxis - 2]}${verticalAxis[currentVerticalAxis - 1]}`
                        };
                    const possibleMoves = Object.values(validMoves).filter(value => value.length == 2);

                    for (let k = 0; k < possibleMoves.length; k++) {
                        if (possibleMoves[k] === victorySquare) {
                            console.log("help used")
                            console.log(possibleMoves);
                            moveCount += 1;
                            moveStore[k] = [fakePosition, possibleMoves[k], moveCount]
                            console.log(JSON.stringify(moveStore));
                            console.log("target is" + moveStore[k][0])
                            setHelp(false);
                            setKnightPosition(moveStore[k][0]);
                            break
                        }
                    }
                    break

                }
            } 
        }
    }) (validMovesArray);





    return <div ref={boardRef} onMouseDown={e => grabKnight(e)} onMouseMove={e => moveKnight(e)} onMouseUp={(e) => dropKnight(e)} className="Board">{board}</div>;
}

export default Board;