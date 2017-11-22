import {
  SET_SOLUTION,
  SET_PUZZLED
} from '../constants/actionNames';

export const setSolution = (solution) => ({ type: SET_SOLUTION, solution});

export const setPuzzled = (puzzled) => ({ type: SET_PUZZLED, puzzled});
