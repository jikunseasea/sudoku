import React from 'react';

import {
  checkIsBottomBoundary,
  checkIsRightBoundary
} from '../../logic/matrix';

import { GRID } from '../../constants/game';
import './grid.css';

const Grid = ({
  index,
  boxSize,
  gridSolution,
  gridPuzzled,
  value,
  validaty
}) => {
  const renderValue = () => {
    if (gridPuzzled) {
      return gridSolution;
    }
    
  };

  const computStyle = () => {
    const color = validaty ? GRID.VALID_COLOR : GRID.INVALID_COLOR;
    const width = `${1 / boxSize * 100}%`;
    let style = {
      color,
      width,
      height: width
    };
    if (checkIsRightBoundary(index, boxSize)) {
      style = {
        ...style,
        borderRight: 'none'
      }
    }
    if (checkIsBottomBoundary(index, boxSize)) {
      style = {
        ...style,
        borderBottom: 'none'
      }
    }
    if (gridPuzzled) {
      style = {
        ...style,
        backgroundColor: GRID.FIXED_BACKGROUND_COLOR
      }
    }
    return style;
  };

  return (
    <div className="grid" style={computStyle()}>{renderValue()}</div>
  );
}

export default Grid;