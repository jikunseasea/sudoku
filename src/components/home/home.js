import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header/header';
import Game from '../game/game'
import Controller from '../controller/controller';
import Mini from '../mini/mini';
import Success from '../success/success';

import { BOX_SIZE as boxSize } from '../../constants/game';

import {
  setValue,
  setCurGrid,
  setMiniShown,
  setSuccessShown
} from '../../actions/actions';

import './home.css';

const Home = ({
  solution,
  puzzled,
  curGrid,
  setValue,
  setCurGrid,
  setMiniShown,
  setSuccessShown
}) => {

  const handlePop = (gridCor) => {
    setCurGrid(gridCor);
    setMiniShown(true);
  };

  const handleClickMini = (e) => {
    setMiniShown(false);
    console.log(e.target);
    setValue(curGrid, e.target.innerHTML);
  };

  const handleSuccess = () => {
    setSuccessShown(true);
    setCurGrid({ rowIndex: null, colIndex: null});
  }

  return (
    <div className="home">
      <Header />
      <Game
        boxSize={boxSize}
        handlePop={handlePop}
        solution={solution}
        puzzled={puzzled} 
        handleSuccess={handleSuccess} />
      <Controller />
      <Mini
        boxSize={boxSize}
        setMiniShown={setMiniShown}
        handleClickMini={handleClickMini} />
      <Success
        setSuccessShown={setSuccessShown} />
    </div>
  );
}

const mapStateToProps = ({
  solution,
  puzzled,
  curGrid
}) => ({
  solution,
  puzzled,
  curGrid
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setValue,
  setCurGrid,
  setMiniShown,
  setSuccessShown
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
