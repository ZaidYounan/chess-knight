import React from 'react';
import './stylesheets/Square.css'
import knightimg from '../images/knight.png'; 
import victorysquareimg from '../images/victory.png';


function Square(props) {
    const {k, i, keyProp, initialKnightPosition, victorySquare} = props;   
    const {xKnightPosition, yKnightPosition} = initialKnightPosition;
    const initialKnight = `${xKnightPosition}${yKnightPosition}`
    const keyLetter = `${keyProp[0]}`
    console.log(keyLetter)

    function initialImageShow() {
        if (keyProp === initialKnight) {
            return knightimg
        } else if (keyProp === victorySquare) {
            return victorysquareimg
        } else {
            return null
        }
    }

    function giveClass() {
        if (keyProp === victorySquare) {
            return "Victory"
        } else if (keyProp === initialKnight) {
            return "Knight"
        } else {
            return null
        }
    }

    function tileColour(axisOne, axisTwo) {
        const number = axisOne + axisTwo + 2;

        if (number % 2 === 0) {
            return "Dark-Tile"
        } else {
            return "Light-Tile"
        }
    }

    function squareAxis(keyProp, i, keyLetter) {
        let number = i + 1;
        if (keyProp === "A1"){
            return <div className="Axis"><p className="FirstNumber">1</p><p className="FirstLetter">A</p></div>
        } else if (keyProp === `A${number}` && keyProp != "A1") {
            return <p className="NumberAxis">{number}</p>
        } else if (keyProp === `${keyLetter}1` && keyProp != "A1") {
            return <p className="LetterAxis">{keyLetter}</p>
        }
    }
    
    return (
        <div className={`Square ${tileColour(k, i)}`}>
            {squareAxis(keyProp, i, keyLetter)}
            <div style={{backgroundImage: `url(${initialImageShow()})`}} className={giveClass()}></div>
        </div>);
}

export default Square;
