import React from 'react';
import { connect } from 'react-redux';

import Box from '../box/box';

import {
  getBoxDataFromMatrixIndex
} from '../../logic/matrix';

import './game.css';

const Game = ({
  value,
  solution,
  puzzled,
  curGrid,
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
      const startCor = {
        rowIndex: boxRowIndex * boxSize,
        colIndex: boxColIndex * boxSize
      }
      const boxSolution = getBoxDataFromMatrixIndex(solution, startCor);
      const boxPuzzled = getBoxDataFromMatrixIndex(puzzled, startCor);
      const boxValue = getBoxDataFromMatrixIndex(value, startCor);
      boxes.push(
        <Box
          key={i}
          boxCor={boxCor}
          boxSolution={boxSolution}
          boxPuzzled={boxPuzzled}
          boxSize={boxSize}
          handlePop={handlePop}
          curGrid={curGrid}
          boxValue={boxValue} />
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

const mapStateToProps = ({
  solution,
  puzzled,
  value,
  curGrid
}) => ({
  solution,
  puzzled,
  value,
  curGrid
});

export default connect(mapStateToProps)(Game);