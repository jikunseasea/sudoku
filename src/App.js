import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={/* Modify here */}></Route>
      </div>
    </Router>
  );
}

export default connect()(App);
