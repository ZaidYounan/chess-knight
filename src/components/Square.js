import React from 'react';
import './stylesheets/Square.css'
import knightimg from '../images/knight.png'; 
import victorysquareimg from '../images/victory.png';


function Square(props) {
    const {k, i, keyProp, initialKnightPosition, victorySquare} = props;   
    const {xKnightPosition, yKnightPosition} = initialKnightPosition;
    const initialKnight = `${xKnightPosition}${yKnightPosition}`

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
    
    return (
        <div className={`Square ${tileColour(k, i)}`}>
            <div style={{backgroundImage: `url(${initialImageShow()})`}} className={giveClass()}></div>
        </div>);
}

export default Square;
