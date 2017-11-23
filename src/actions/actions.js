import {
  SET_SOLUTION,
  SET_PUZZLED,
  SET_CUR_GRID
} from '../constants/actionNames';

export const setSolution = (solution) => ({ type: SET_SOLUTION, solution});

export const setPuzzled = (puzzled) => ({ type: SET_PUZZLED, puzzled});

export const setCurGrid = (cor) => ({ type: SET_CUR_GRID, cor});
