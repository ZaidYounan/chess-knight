import React from 'react';

function Square(props) {
    const {k, i} = props;
    
    function tileColour(axisOne, axisTwo) {
        const number = axisOne + axisTwo + 2;

        if (number % 2 === 0) {
            return "Light-Tile"
        } else {
            return "Dark-Tile"
        }
    }
    
  return <div className={`Square ${tileColour(k, i)}`}></div>
  ;
}

export default Square;
