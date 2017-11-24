import React from 'react';

import {
  checkIsBottomBoundary,
  checkIsRightBoundary
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
    if (!gridPuzzled && (gridSolution !== gridValue)) {
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
    const length = boxSize ** 2;
    const index = rowIndex * length + colIndex;
    if (checkIsRightBoundary(index, boxSize)) {
      classNames.push('right-boundary');
    }
    if (checkIsBottomBoundary(index, boxSize)) {
      classNames.push('bottom-boundary');
    }
    if (gridPuzzled) {
      classNames.push('puzzled');
    }
    if (isValid()) {
      classNames.push('valid');
    } else {
      classNames.push('invalid');
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