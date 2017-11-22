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
  boxIndex,
  boxSolution,
  boxPuzzled
}) => {
  const renderGrids = () => {
    const grids = [];
    for (let i = 0; i < boxSize ** 2; ++i) {
      grids.push(
        <Grid
          key={i}
          index={i}
          boxSize={boxSize}
          gridSolution={boxSolution[i]}
          gridPuzzled={boxPuzzled[i]}
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