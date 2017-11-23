import React from 'react';

import Box from '../box/box';

import {
  getBoxDataFromMatrixIndex
} from '../../logic/matrix';

import './game.css';

const Game = ({
  solution,
  puzzled,
  boxSize,
  handlePop
}) => {

  const renderBoxes = () => {
    const length = boxSize ** 2;
    const boxes = [];
    for (let i = 0; i < length; ++i) {
      const boxRowIndex = Math.floor(i / boxSize);
      const boxColIndex = i % boxSize;
      const boxCor = { boxRowIndex, boxColIndex };
      const rowIndex = boxRowIndex * boxSize;
      const colIndex = boxColIndex * boxSize;
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
          // boxIndex={i}
          boxCor={boxCor}
          boxSolution={boxSolution}
          boxPuzzled={boxPuzzled}
          boxSize={boxSize}
          handlePop={handlePop} />
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