import React from 'react';
import './stylesheets/Square.css'
import knightimg from '../images/knight.png'; 


function Square(props) {
    const {k, i, keyProp, board, knightPosition} = props;   
    const {xPosition, yPosition} = knightPosition;
    const knight = `${xPosition}${yPosition}`

    function knightShow() {
        if (keyProp == knight) {
            return knightimg
        } else {
            return null
        }
    }

    function tileColour(axisOne, axisTwo) {
        const number = axisOne + axisTwo + 2;

        if (number % 2 === 0) {
            return "Light-Tile"
        } else {
            return "Dark-Tile"
        }
    }
    
    return (
        <div className={`Square ${tileColour(k, i)}`}>
            <img src={knightShow()}></img>
        </div>);
}

export default Square;
