import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header/header';
import Game from '../game/game'
import Controller from '../controller/controller';
import Mini from '../mini/mini';

import { BOX_SIZE as boxSize } from '../../constants/game';

import {
  setSolution,
  setPuzzled,
  setValue,
  setCurGrid,
  setMiniShown
} from '../../actions/actions';

import './app.css';

const App = ({
  setSolution,
  setPuzzled,
  setCurGrid,
  setMiniShown,
  setValue
}) => {

  setSolution();
  setPuzzled();

  const handlePop = (gridCor) => {
    setCurGrid(gridCor);
    setMiniShown(true);
  };

  return (
    <div className="home">
      <Header />
      <Game
        boxSize={boxSize}
        handlePop={handlePop}
        />
      <Controller />
      <Mini
        setMiniShown={setMiniShown}
        />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSolution,
  setPuzzled,
  setValue,
  setCurGrid,
  setMiniShown
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(App);
