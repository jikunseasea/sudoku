import { combineReducers } from 'redux';

import {
  SET_PUZZLED,
  SET_SOLUTION,
  SET_VALUE,
  SET_VALIDATION,
  SET_CUR_GRID
} from '../constants/actionNames';

const solution = (state = [], action) => {
  switch (action.type) {
    case SET_SOLUTION:
      return action.solution;
    default:
      return state;
  }
};

const puzzled = (state = [], action) => {
  switch (action.type) {
    case SET_PUZZLED:
      return action.puzzled;
    default:
      return state;
  }
};

const value = (state = [], action) => {
  switch (action.type) {
    case SET_VALUE:
      return action.value;
    default:
      return state;
  }
};


const validation = (state = [], action) => {
  switch (action.type) {
    case SET_VALIDATION:
      return action.validation;
    default:
      return state;
  }
};

const curGrid = (state = {}, action) => {
  switch (action.type) {
    case SET_CUR_GRID:
      return action.cor;
    default:
      return state;
  }
};

export default combineReducers({
  solution,
  puzzled,
  value,
  validation,
  curGrid
});