import React from 'react';

import './box.css';

import Grid from '../grid/grid';

import {
  checkIsBottomBoundary,
  checkIsRightBoundary
} from '../../logic/matrix';

// 宫
const Box = ({
  boxSize,
  boxCor,
  boxSolution,
  boxPuzzled,
  handlePop,
  curGrid,
  boxValue
}) => {
  const renderGrids = () => {
    const grids = [];
    const { boxRowIndex, boxColIndex } = boxCor;
    for (let i = 0; i < boxSize ** 2; ++i) {
      const rowIndex = boxRowIndex * boxSize + Math.floor(i / boxSize);
      const colIndex = boxColIndex * boxSize + i % boxSize;
      const gridCor = { rowIndex, colIndex };
      grids.push(
        <Grid
          key={i}
          boxSize={boxSize}
          gridCor={gridCor}
          gridSolution={boxSolution[i]}
          gridPuzzled={boxPuzzled[i]}
          gridValue={boxValue[i]}
          handlePop={handlePop}
          curGrid={curGrid} />
      );
    }
    return grids;
  };

  const computeClassName = () => {
    const classNames = ['box'];
    const { boxRowIndex, boxColIndex } = boxCor;
    const boxIndex = boxRowIndex * boxSize + boxColIndex;
    if (checkIsRightBoundary(boxIndex, boxSize)) {
      classNames.push('right-box');
    }
    if (checkIsBottomBoundary(boxIndex, boxSize)) {
      classNames.push('bottom-box');
    }
    return classNames.join(' ');
  };

  const computeStyle = () => {
    const width = `${1 / boxSize * 100}%`;
    return { width, height: width };
  }

  return (
    <div
      className={computeClassName()}
      style={computeStyle()}>
      {renderGrids()}
    </div>
  );
}

export default Box;