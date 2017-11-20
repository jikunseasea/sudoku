import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducers/root-reducer';
import './index.css';
import Home from './components/home/home';
import Mini from './components/mini/mini';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/mini" component={Mini} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
