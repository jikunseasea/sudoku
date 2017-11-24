import {
  SET_SOLUTION,
  SET_PUZZLED,
  SET_VALUE,
  // SET_VALIDATION,
  SET_CUR_GRID,
  SET_MINI_SHOWN
} from '../constants/actionNames';

import { BOX_SIZE as boxSize } from '../constants/game';
import { makeMatrix } from '../logic/matrix';
import { generate } from '../logic/generator';
import { puzzle } from '../logic/puzzler';

const defaultSolution = generate(boxSize ** 2);
export const setSolution = (solution = defaultSolution) => ({ type: SET_SOLUTION, solution });

const defaultPuzzled = puzzle(boxSize ** 2);
export const setPuzzled = (puzzled = defaultPuzzled) => ({ type: SET_PUZZLED, puzzled });

const defaultValue = makeMatrix(boxSize ** 2, boxSize ** 2, 0);
export const setValue = (value = defaultValue) => ({ type: SET_VALUE, value });

// export const setValidation = (validation) => ({ type: SET_VALIDATION, validation});

export const setCurGrid = (cor) => ({ type: SET_CUR_GRID, cor });

export const setMiniShown = (miniShown) => ({ type: SET_MINI_SHOWN, miniShown });
