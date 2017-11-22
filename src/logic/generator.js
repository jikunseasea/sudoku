//
// ────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: G E N E R A T E   A   S O L V E D   S U D O K U   M A T R I X : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//

const {
  makeMatrix,
  cloneMatrix,
  getBoxDataFromMatrixIndex,
  makeShuffledRow
} = require('./matrix');

const isRowFillable = (matrix, rowIndex, n) => matrix[rowIndex].every(v => v !== n);

const isColFillable = (matrix, colIndex, n) => matrix.map(row => row[colIndex]).every(v => v !== n);

const isBoxFillable = (matrix, { rowIndex, colIndex }, n) => {
  const boxData = getBoxDataFromMatrixIndex(matrix, { rowIndex, colIndex });
  return boxData.every(v => v !== n);
}

const isFillable = (matrix, { rowIndex, colIndex }, n) => {
  if (matrix[rowIndex][colIndex] !== 0) return false;
  if (!isRowFillable(matrix, rowIndex, n)) return false;
  if (!isColFillable(matrix, colIndex, n)) return false;
  if (!isBoxFillable(matrix, { rowIndex, colIndex }, n)) return false;
  return true;
}

const fillNum = (matrix, n, rowIndex = 0) => {
  const rowCnt = matrix.length;
  if (rowIndex >= rowCnt) {
    return {
      flag: true,
      matrix
    };
  }
  const cloned = cloneMatrix(matrix);
  const row = cloned[rowIndex];
  const shuffledRow = makeShuffledRow(cloned[0].length);
  for (let i = 0, colCnt = cloned[0].length; i < colCnt; ++i) {
    const colIndex = shuffledRow[i];
    if (isFillable(cloned, { rowIndex, colIndex }, n)) {
      row[colIndex] = n;
      const { flag, matrix } = fillNum(cloned, n, rowIndex + 1);
      if (!flag) {
        row[colIndex] = 0;
      }
      return { flag, matrix };
    }
  }
  return { flag: false };
};

const tryGenerate = (size) => {
  let flag = true;
  let matrix = makeMatrix(size, size);
  for (let i = 0; i < size; ++i) {
    let singleSolution = fillNum(matrix, i + 1);
    if (!singleSolution.flag) {
      flag = false;
      break;
    }
    matrix = singleSolution.matrix;
  }
  return { flag, matrix };
}

const generate = (size) => {
  let solution = tryGenerate(size);
  while(!solution.flag) {
    solution = tryGenerate(size);
  }
  return solution.matrix;
};

module.exports = { generate };
