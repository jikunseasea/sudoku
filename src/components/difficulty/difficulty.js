import React from 'react';

import './difficulty.css';

import {
  BOTTOM_LEVEL,
  LEVEL,
  TOP_LEVEL
} from '../../constants/game';

const Difficulty = ({ handleDifficulty, difficulty }) => {
  const computeClassName = (level) => {
    const classNames = ['btn', 'btn-lg'];
    if (level === difficulty) {
      classNames.push('active');
    }
    return classNames.join(' ');
  };
  return (
    <div className="btn-group difficulty">
      <button className={computeClassName(BOTTOM_LEVEL)} onClick={() => handleDifficulty(BOTTOM_LEVEL)}>Easy</button>
      <button className={computeClassName(LEVEL)} onClick={() => handleDifficulty(LEVEL)}>Normal</button>
      <button className={computeClassName(TOP_LEVEL)} onClick={() => handleDifficulty(TOP_LEVEL)}>Difficult</button>
    </div>
  );
}

export default Difficulty;