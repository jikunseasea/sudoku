import {
  SET_SOLUTION,
  SET_PUZZLED,
  SET_VALUE,
  SET_VALIDATION,
  SET_CUR_GRID
} from '../constants/actionNames';

export const setSolution = (solution) => ({ type: SET_SOLUTION, solution});

export const setPuzzled = (puzzled) => ({ type: SET_PUZZLED, puzzled});

export const setValue = (value) => ({ type: SET_VALUE, value});

export const setValidation = (validation) => ({ type: SET_VALIDATION, validation});

export const setCurGrid = (cor) => ({ type: SET_CUR_GRID, cor});
