import React from 'react';

import {
  checkIsBottomBoundary,
  checkIsRightBoundary
} from '../../toolkit';

import { GRID } from '../../constants/game';
import './grid.css';

const Grid = ({
  index,
  boxSize,
  value,
  validaty
}) => {
  const color = validaty ? GRID.VALID_COLOR : GRID.INVALID_COLOR;


  const computStyle = () => {
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
    return style;
  };

  return (
    <div className="grid" style={computStyle()}>{value}</div>
  );
}

export default Grid;