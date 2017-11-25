import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setSolution,
  setPuzzled,
  initValidation,
  initValue,
  setDifficulty
} from './actions/actions';

import Home from './components/home/home';

const App = ({
  setSolution,
  setPuzzled,
  initValidation,
  initValue,
  setDifficulty
}) => {
  console.log('re-render...');
  setSolution();
  setPuzzled();
  initValidation();
  initValue();
  return (
    <Home
      setSolution={setSolution}
      setPuzzled={setPuzzled}
      setDifficulty={setDifficulty} />
  );
};

// const mapStateToProps = ({ difficulty }) => ({ difficulty });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSolution,
  setPuzzled,
  initValidation,
  initValue,
  setDifficulty
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(App);