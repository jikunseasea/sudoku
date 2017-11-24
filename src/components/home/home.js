import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header/header';
import Game from '../game/game'
import Controller from '../controller/controller';
import Mini from '../mini/mini';

// import { generate } from '../../logic/generator';
// import { puzzle } from '../../logic/puzzler';
// import { checkCurrentMatrix } from '../../logic/checker';

import { BOX_SIZE as boxSize } from '../../constants/game';

import {
  setSolution,
  setPuzzled,
  setValue,
  // setValidation,
  setCurGrid,
  setMiniShown
} from '../../actions/actions';

import './home.css';

const Home = ({
  value,
  solution,
  puzzled,
  curGrid,
  miniShown,
  setSolution,
  setPuzzled,
  setCurGrid,
  setMiniShown,
  setValue
}) => {

  setSolution();
  setPuzzled();
  setValue();
  // const solution = generate(boxSize ** 2);
  // setSolution(solution);

  // const puzzled = puzzle(boxSize ** 2);
  // setPuzzled(puzzled);

  // const validation = checkCurrentMatrix(value);
  // setValidation(validation);

  const handlePop = (gridCor) => {
    // Mark cur grid
    setCurGrid(gridCor);
    // Show Mini
    setMiniShown(true);
  };

  return (
    <div className="home">
      <Header />
      <Game
        solution={solution}
        puzzled={puzzled}
        boxSize={boxSize}
        handlePop={handlePop}
        curGird={curGrid}
        value={value} />
      <Controller />
      <Mini
        miniShown={miniShown}
        setMiniShown={setMiniShown} />
    </div>
  );
}

const mapStateToProps = ({
  curGrid,
  value,
  miniShown,
  solution,
  puzzled
}) => ({
  solution,
  puzzled,
  curGrid,
  value,
  miniShown
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSolution,
  setPuzzled,
  setValue,
  setCurGrid,
  setMiniShown,
  setValue
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
