import { combineReducers } from 'redux';

import { LEVEL } from '../constants/game';

import {
  SET_PUZZLED,
  SET_SOLUTION,
  INIT_VALIDATION,
  CHECK_VALIDATION,
  UNCHECK_VALIDATION,
  SET_VALUE,
  SET_CUR_GRID,
  CLEAR_CUR_GRID,
  SET_MINI_SHOWN,
  SET_SUCCESS_SHOWN,
  INIT_VALUE,
  SET_DIFFICULTY
} from '../constants/actionNames';

import { cloneMatrix } from '../logic/matrix';

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

const valueMatrix = (state = [[]], action) => {
  switch (action.type) {
    case INIT_VALUE:
      return action.valueMatrix;
    case SET_VALUE:
      const { rowIndex, colIndex } = action.cor;
      const valueMatrix = cloneMatrix(state);
      valueMatrix[rowIndex][colIndex] = action.value;
      return valueMatrix;
    default:
      return state;
  }
};

const curGrid = (state = {}, action) => {
  switch (action.type) {
    case SET_CUR_GRID:
      return action.cor;
    case CLEAR_CUR_GRID:
      return action.cor;
    default:
      return state;
  }
};

const miniShown = (state = false, action) => {
  switch (action.type) {
    case SET_MINI_SHOWN:
      return action.miniShown;
    default:
      return state;
  }
};

const successShown = (state = false, action) => {
  switch (action.type) {
    case SET_SUCCESS_SHOWN:
      return action.successShown;
    default:
      return state;
  }
};

const validation = (state = [[]], action) => {
  switch (action.type) {
    case INIT_VALIDATION:
      return action.validation;
    case CHECK_VALIDATION:
      return action.validation;
    case UNCHECK_VALIDATION:
      return action.validation;
    default:
      return state;
  }
}

const difficulty = (state = LEVEL, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return action.level;
    default:
      return state;
  }
};

export default combineReducers({
  solution,
  puzzled,
  validation,
  valueMatrix,
  curGrid,
  miniShown,
  successShown,
  difficulty
});