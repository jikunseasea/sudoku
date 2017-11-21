//
// ─── CHECK WHETHER THE SPECIFIC SON ELEMENT IS AT THE ───────────────────────────
// ─── BOUNDARY OF THE PARENT ELEMENT ─────────────────────────────────────────────
//

// index: Specific index in the parent element.
// size: The count of son element of the parent height
//       or width
export const checkIsRightBoundary = (index, size) => index % size === size - 1;
export const checkIsBottomBoundary = (index, size) => Math.floor(index / size) === size - 1;

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── GENERATE A SOLVED SUDOKU MATRIX ────────────────────────────────────────────
//

const makeRow = (length) => Array.from({ length }).fill(0);

const makeMatrix = (row, col) => Array.from({ length: row }).map(row => makeRow(col));

const overideMatrix = (defaultMatrix, matrix) => {
  const rowCnt = defaultMatrix.length;
  const colCnt = defaultMatrix[0].length;
  const result = makeMatrix(rowCnt, colCnt);
  // Width and height of 'defaultMatrix' and 'matrix' must be equal
  result.forEach((row, i) => {
    row.forEach((cell, j) => {
      result[i][j] = matrix[i][j] === 0 ? defaultMatrix[i][j] : matrix[i][j];
    })
  })
  return result;
}

const cloneMatrix = (matrix) => Array.from({ length: matrix.length }).map(row => [...matrix[i]]);

const fillNum = (orders, matrix, n, rowIndex = 0) => {
  const rowCnt = matrix.length;
  if (rowIndex >= rowCnt) {
    return {
      flag: true,
      matrix
    };
  }
  const cloned = cloneMatrix(matrix);
  const row = cloned[rowIndex];
  const orderedRow = orders[rowIndex];
  for (let i = 0, colCnt = cloned[0].length; i < colCnt; ++i) {
    const colIndex = orderedRow[i];
    if (checkFillable()) {
      row[colIndex] = n;
      if (fillNum(orders, cloned, n, rowIndex + 1).flag) {
        return {
          flag: true,
          matrix: cloned
        }
      }
      return {
        flag: false
      }
    }
  }
};


const shuffleArray = (arr) => {
  const cloned = [...arr];
  const { length } = cloned;
  for (let i = 0; i < length - 1; ++i) {
    const randomIndex = i + Math.floor(Math.random() * (length - i));
    [cloned[i], cloned[randomIndex]] = [cloned[randomIndex], cloned[i]];
  }
  return cloned;
}

const makeRandomMatrix = (row, col) => (
  makeMatrix(row, col)
    .map(row => row.map((v, i) => i))
    .map(row => shuffleArray(row))
);

const generateSolution = (size) => {
  let flag = true;
  let matrix = makeMatrix(size, size);
  const orders = makeRandomMatrix(size, size);
  for (let i = 0; i < size; ++i) {
    let singleSolution = fillNum(orders, matrix, i + 1);
    if (!singleSolution.flag) {
      flag = false;
      break;
    }
    matrix = singleSolution.matrix;
  }
  return { flag, matrix };
}

export const genSolution = (size) => {
  let solution = generateSolution(size);
  while(!solution.flag) {
     console.log('Try again');
     solution = generateSolution(size);
  }
  return solution.matrix;
};

// ────────────────────────────────────────────────────────────────────────────────
