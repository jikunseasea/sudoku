import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header/header';
import Game from '../game/game'
import Controller from '../controller/controller';
import Mini from '../mini/mini';
import Success from '../success/success';
import Difficulty from '../difficulty/difficulty';

import { BOX_SIZE as boxSize } from '../../constants/game';

import {
  setValue,
  setCurGrid,
  checkValidation,
  uncheckValidation,
  setMiniShown,
  setSuccessShown,
  initValidation,
  initValue,
  clearCurGrid
} from '../../actions/actions';

import './home.css';

const Home = ({
  solution,
  puzzled,
  valueMatrix,
  validation,
  curGrid,
  setValue,
  setCurGrid,
  checkValidation,
  uncheckValidation,
  setMiniShown,
  setSuccessShown,
  initValidation,
  initValue,
  setSolution,
  setPuzzled,
  clearCurGrid,
  setDifficulty,
  difficulty
}) => {

  const handlePop = (gridCor) => {
    setCurGrid(gridCor);
    setMiniShown(true);
  };

  const handleClickMini = (e) => {
    uncheck();
    setMiniShown(false);
    const inputValue = e.target.innerHTML;
    let value = Number.parseInt(inputValue, 10);
    value = isNaN(value) ? inputValue : value;
    setValue(curGrid, value);
  };

  const isSucceeded = (matrix) => matrix.every(row => row.every(cell => cell === true));
  const check = () => {
    if (isSucceeded(validation)) {
      setSuccessShown(true);
      clearCurGrid();
      return;
    }
    checkValidation(solution, puzzled, valueMatrix);
  };

  const uncheck = () => {
    uncheckValidation(validation);
  };

  const reset = () => {
    initValue();
    clearCurGrid();
  };

  const restart = () => {
    setSolution();
    setPuzzled(null, difficulty);
    initValidation();
    initValue();
    clearCurGrid();
  }

  const handleDifficulty = (level) => {
    setDifficulty(level);
    setSolution();
    setPuzzled(null, level);
    initValidation();
    initValue();
    clearCurGrid();
  };

  return (
    <div className="home">
      <Header />
      <Game
        boxSize={boxSize}
        handlePop={handlePop}
        solution={solution}
        puzzled={puzzled} />
      <Difficulty
        difficulty={difficulty}
        handleDifficulty={handleDifficulty} />
      <Controller
        check={check}
        uncheck={uncheck}
        reset={reset}
        restart={restart} />
      <Mini
        boxSize={boxSize}
        setMiniShown={setMiniShown}
        handleClickMini={handleClickMini} />
      <Success
        setSuccessShown={setSuccessShown} />
    </div>
  );
}

const mapStateToProps = ({  solution,
  puzzled,
  valueMatrix,
  validation,
  curGrid,
  difficulty
}) => ({
  solution,
  puzzled,
  valueMatrix,
  validation,
  curGrid,
  difficulty
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  // setDifficulty,
  setValue,
  setCurGrid,
  checkValidation,
  uncheckValidation,
  setMiniShown,
  setSuccessShown,
  initValidation,
  initValue,
  clearCurGrid
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
