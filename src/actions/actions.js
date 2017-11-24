import {
  SET_SOLUTION,
  SET_PUZZLED,
  SET_VALUE,
  SET_CUR_GRID,
  SET_MINI_SHOWN,
  INIT_VALUE,
  SET_SUCCESS_SHOWN
} from '../constants/actionNames';

import { BOX_SIZE as boxSize } from '../constants/game';

import { generate } from '../logic/generator';
import { makeMatrix } from '../logic/matrix';
import { puzzle } from '../logic/puzzler';

export const setSolution = (solution) => {
  let defaultSolution = null;
  if (!solution) {
    defaultSolution = generate(boxSize ** 2);
  } else {
    defaultSolution = solution;
  }
  return { type: SET_SOLUTION, solution: defaultSolution };
}

export const setPuzzled = (puzzled) => {
  let defaultPuzzled = null;
  if (!puzzled) {
    defaultPuzzled = puzzle(boxSize ** 2);
  } else {
    defaultPuzzled = puzzled;
  }
  return { type: SET_PUZZLED, puzzled: defaultPuzzled };
};

export const setValue = (cor, value) => ({ type: SET_VALUE, cor, value });

export const initValue = (valueMatrix) => {
  let defaultValueMatrix = null;
  if (!valueMatrix) {
    defaultValueMatrix = makeMatrix(boxSize ** 2, boxSize ** 2, '');
  } else {
    defaultValueMatrix = valueMatrix;
  }
  return { type: INIT_VALUE, valueMatrix: defaultValueMatrix };
};

export const setCurGrid = (cor) => ({ type: SET_CUR_GRID, cor });

export const setMiniShown = (miniShown) => ({ type: SET_MINI_SHOWN, miniShown });

export const setSuccessShown = (successShown) => ({ type: SET_SUCCESS_SHOWN, successShown });
