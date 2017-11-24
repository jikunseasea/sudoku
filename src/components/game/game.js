import React from 'react';
import { connect } from 'react-redux';
import Box from '../box/box';

import {
  getBoxDataFromMatrixIndex,
  isEqualMatrix
} from '../../logic/matrix';

import './game.css';

const Game = ({
  curGrid,
  valueMatrix,
  solution,
  puzzled,
  boxSize,
  handlePop,
  handleSuccess
}) => {
  if (isEqualMatrix(valueMatrix, solution)) {
    handleSuccess();
  }

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
      const boxValue = getBoxDataFromMatrixIndex(valueMatrix, startCor);
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
  curGrid,
  valueMatrix
}) => ({
  curGrid,
  valueMatrix
});
export default connect(mapStateToProps)(Game);