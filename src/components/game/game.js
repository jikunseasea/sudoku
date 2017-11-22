import React from 'react';

import Box from '../box/box';

import {
  getBoxDataFromMatrixIndex
} from '../../logic/matrix';

import './game.css';

const Game = ({
  solution,
  puzzled,
  boxSize
}) => {

  const renderBoxes = () => {
    const length = boxSize ** 2;
    const boxes = [];
    for (let i = 0; i < length; ++i) {
      const rowIndex = Math.floor(i / boxSize) * boxSize;
      const colIndex = (i % boxSize) * boxSize;
      const boxSolution = getBoxDataFromMatrixIndex(solution, {
        rowIndex,
        colIndex
      });
      const boxPuzzled = getBoxDataFromMatrixIndex(puzzled, {
        rowIndex,
        colIndex
      });
      boxes.push(
        <Box
          key={i}
          boxIndex={i}
          boxSolution={boxSolution}
          boxPuzzled={boxPuzzled}
          boxSize={boxSize} />
      );
    }
    return boxes;
  }

  return (
    <div className="game">
      {renderBoxes()}
    </div>
  );

}

export default Game;