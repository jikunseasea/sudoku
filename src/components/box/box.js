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
  // boxIndex,
  boxCor,
  boxSolution,
  boxPuzzled,
  handlePop
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
          handlePop={handlePop}
          // value={boxSolution[i]}
          // validaty={false} />
          />
      );
    }
    return grids;
  };

  const computeStyle = () => {
    const width = `${1 / boxSize * 100}%`;
    let style = { width, height: width };
    const { boxRowIndex, boxColIndex } = boxCor;
    const boxIndex = boxRowIndex * boxSize + boxColIndex;
    if (checkIsRightBoundary(boxIndex, boxSize)) {
      style = {
        ...style,
        borderRight: 'none'
      }
    }
    if (checkIsBottomBoundary(boxIndex, boxSize)) {
      style = {
        ...style,
        borderBottom: 'none'
      }
    }
    return style;
  }

  return (
    <div className="box" style={computeStyle()}>
      {renderGrids()}
    </div>
  );
}

export default Box;