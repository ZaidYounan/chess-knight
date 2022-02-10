import React from 'react';
import './stylesheets/Square.css'
import knightimg from '../images/knight.png'; 
import victorysquareimg from '../images/victory.png';


function Square(props) {
    const {k, i, keyProp, board, initialKnightPosition, victorySquare} = props;   
    const {xKnightPosition, yKnightPosition} = initialKnightPosition;
    const initialKnight = `${xKnightPosition}${yKnightPosition}`

    function knightShow() {
        if (keyProp == initialKnight) {
            return knightimg
        } else {
            return null
        }
    }

    function victorySquareShow() {
        if (keyProp == victorySquare) {
            return victorysquareimg
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
            <img src={knightShow()}></img>
            <img src={victorySquareShow()}></img>
        </div>);
}

export default Square;
