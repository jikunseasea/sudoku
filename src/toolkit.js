/**
|--------------------------------------------------
| Check whether the specific son element is at the
| boundary of the parent element.
| index: Specific index in the parent element.
| size: The count of son element of the parent height
|       or width.
|--------------------------------------------------
*/
export const checkIsRightBoundary = (index, size) => index % size === size - 1;
export const checkIsBottomBoundary = (index, size) => Math.floor(index / size) === size - 1;

// ============================================================

/**
|--------------------------------------------------
| Generate a solved sudoku matrix
|--------------------------------------------------
*/
const initMatrix = (size) => {}
const fillNum = (matrix, n) => {};
const overideMatrix = (defaultMatrix, matrix) => {

}
const generateSolution = (size) => {
  let matrix = [];
  let filledMatrix = [];
  for (let i = 0; i < size; ++i) {
    filledMatrix = fillNum(matrix, i + 1);
    if (!row) {
      return false;
    }
    matrix = overideMatrix(matrix, filledMatrix);
  }
  return matrix;
}
export const genSolution = (size) => {
  let solution = generateSolution(size);
  while(!solution) {
    solution = generateSolution(size);
  }
  return solution;
};

// ============================================================