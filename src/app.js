import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setSolution,
  setPuzzled,
  initValue
} from './actions/actions';

import Home from './components/home/home';

const App = ({
  setSolution,
  setPuzzled,
  initValue
}) => {
  setSolution();
  setPuzzled();
  initValue();
  return (
    <Home />
  );
};


const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSolution,
  setPuzzled,
  initValue
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(App);