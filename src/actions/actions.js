import {
  SET_SOLUTION,
  SET_PUZZLED,
  INIT_VALIDATION,
  CHECK_VALIDATION,
  UNCHECK_VALIDATION,
  SET_VALUE,
  SET_CUR_GRID,
  CLEAR_CUR_GRID,
  SET_MINI_SHOWN,
  INIT_VALUE,
  SET_SUCCESS_SHOWN,
  SET_DIFFICULTY
} from '../constants/actionNames';

import {
  BOX_SIZE as boxSize,
  LEVEL
} from '../constants/game';

import { generate } from '../logic/generator';
import { makeMatrix, mergeMatrix, overrideMatrix } from '../logic/matrix';
import { puzzle } from '../logic/puzzler';
import { checkCurrentMatrix, uncheckCurrentMatrix } from '../logic/checker';

export const setSolution = (solution) => {
  let defaultSolution = null;
  if (!solution) {
    defaultSolution = generate(boxSize ** 2);
  } else {
    defaultSolution = solution;
  }
  return { type: SET_SOLUTION, solution: defaultSolution };
}

export const setPuzzled = (puzzled, difficulty = LEVEL) => {
  console.log(difficulty);
  let defaultPuzzled = null;
  if (!puzzled) {
    defaultPuzzled = puzzle(boxSize ** 2, difficulty);
  } else {
    defaultPuzzled = puzzled;
  }
  return { type: SET_PUZZLED, puzzled: defaultPuzzled };
};

export const initValidation = (validation) => {
  // let defaultValidation = validation ? validation : makeMatrix(boxSize ** 2, boxSize ** 2, true);
  const defaultValidation = validation ? validation : makeMatrix(boxSize ** 2, boxSize ** 2, null);
  return { type: INIT_VALIDATION, validation: defaultValidation };
};
export const checkValidation = (solution, puzzled, matrix) => {
  const merged = mergeMatrix(solution, puzzled, v => v === true);
  const overriden = overrideMatrix(merged, matrix, v => v !== '');
  const validation = checkCurrentMatrix(overriden);
  return { type: CHECK_VALIDATION, validation };
}
export const uncheckValidation = (validation) => {
  const uncheckedValidation = uncheckCurrentMatrix(validation);
  return { type: UNCHECK_VALIDATION, validation: uncheckedValidation };
}

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
export const clearCurGrid = () => ({ type: CLEAR_CUR_GRID, cor: { rowIndex: null, colIndex: null} });

export const setMiniShown = (miniShown) => ({ type: SET_MINI_SHOWN, miniShown });

export const setSuccessShown = (successShown) => ({ type: SET_SUCCESS_SHOWN, successShown });

export const setDifficulty = (level = LEVEL) => ({ type: SET_DIFFICULTY, level });