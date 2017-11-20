import React from 'react';


import { BOX_SIZE as boxSize } from '../../constants/game';

import Box from '../box/box';

import './game.css';

const Game = () => {

  const renderBoxes = (boxSize) => {
    const boxCnt = boxSize ** 2;
    const boxes = [];
    for (let i = 0; i < boxCnt; ++i) {
      boxes.push(
        <Box
          key={i}
          boxIndex={i}
          boxSize={boxSize} />
      );
    }
    return boxes;
  }

  return (
    <div className="game">
      {renderBoxes(boxSize)}
    </div>
  );

}

export default Game;