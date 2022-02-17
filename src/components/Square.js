import React from 'react';
import './stylesheets/Square.css'
import knightimg from '../images/knight.png'; 
import victorysquareimg from '../images/victory.png';


function Square(props) {
    const {k, i, keyProp, knightPosition, victorySquare, validMoves, knightActive} = props;   

    const keyLetter = `${keyProp[0]}`
    console.log(`knightPosition is ${knightPosition}`)

    function initialImageShow() {
        if (keyProp === knightPosition) {
            return knightimg
        } else if (keyProp === victorySquare) {
            return victorysquareimg
        } else {
            return null
        }
    }

    function giveClass() {
        if (keyProp === victorySquare) {
            return `Victory ${victorySquare}`
        } else if (keyProp === knightPosition) {
            return `Knight ${knightPosition}`
        } else {
            return null
        }
    }

    function tileColour(axisOne, axisTwo) {
        const number = axisOne + axisTwo + 2;
        console.log(typeof validMoves["validFour"]);
        console.log(typeof keyProp);

        if (number % 2 === 0) {
            return "Dark-Tile"
        }  else {
            return "Light-Tile"
        }
    }

    function showValidMoves() {
        if (knightActive && Object.values(validMoves).includes(keyProp)) {
            return "ValidMove" 
        }
    }


    function squareAxis(keyProp, i, keyLetter) {
        let number = i + 1;
        if (keyProp === "A1"){
            return <div className="Axis"><p className="FirstNumber Axis">1</p><p className="FirstLetter Axis">A</p></div>
        } else if (keyProp === `A${number}` && keyProp !== "A1") {
            return <p className="NumberAxis Axis">{number}</p>
        } else if (keyProp === `${keyLetter}1` && keyProp !== "A1") {
            return <p className="LetterAxis Axis">{keyLetter}</p>
        }
    }
    
    return (
        <div className={`Square ${tileColour(k, i)} ${keyProp} ${showValidMoves()}`}>
            {squareAxis(keyProp, i, keyLetter)}
            <div className={giveClass()} style={{backgroundImage: `url(${initialImageShow()})`}}></div>
        </div>);
}

export default Square;
