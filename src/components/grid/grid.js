import React from 'react';

import {
  checkIsBottomBoundary,
  checkIsRightBoundary,
  checkIsLeftBoundary,
  checkIsTopBoundary
} from '../../logic/matrix';

import './grid.css';

const Grid = ({
  boxSize,
  gridCor,
  gridSolution,
  gridPuzzled,
  gridValue,
  handlePop,
  curGrid
}) => {
  const isCur = () => (
    (gridCor.rowIndex === curGrid.rowIndex)
      && (gridCor.colIndex === curGrid.colIndex)
  );
  
  const isValid = () => {
    if (!gridPuzzled && (gridValue !== '') && (gridSolution !== gridValue)) {
      return false;
    }
    return true;
  }

  const renderValue = () => {
    if (gridPuzzled) {
      return gridSolution;
    }
    return gridValue;
  };

  const handleClick = () => {
    if (!gridPuzzled) {
      handlePop(gridCor);
    }
  }


  const computeClassName = () => {
    const classNames = ['grid'];
    const { rowIndex, colIndex } = gridCor;
    const innerRowIndex = rowIndex % boxSize;
    const innerColIndex = colIndex % boxSize;
    const innerIndex = innerRowIndex * boxSize + innerColIndex;
    if (checkIsRightBoundary(innerIndex, boxSize)) {
      classNames.push('right-boundary');
    }
    if (checkIsBottomBoundary(innerIndex, boxSize)) {
      classNames.push('bottom-boundary');
    }
    if (checkIsLeftBoundary(innerIndex, boxSize)) {
      classNames.push('left-boundary');
    }
    if (checkIsTopBoundary(innerIndex, boxSize)) {
      classNames.push('top-boundary');
    }
    if (gridPuzzled) {
      classNames.push('puzzled');
    }
    if (isValid()) {
      classNames.push('valid');
    } else {
      classNames.push('invalid');
    }
    if (isCur()) {
      classNames.push('cur-grid');
    }
    return classNames.join(' ');
  };

  const computeStyle = () => {
    const width = `${1 / boxSize * 100}%`;
    return { width, height: width };
  };

  return (
    <div
      className={computeClassName()}
      style={computeStyle()}
      onClick={handleClick}>
      {renderValue()}
    </div>
  );
}

export default Grid;