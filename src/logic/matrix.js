//
// ────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: T O O L S   A B O U T   V E C T O R   A N D   M A T R I X : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


const makeRow = (length, v = 0) => Array.from({ length }).fill(v);

const makeMatrix = (row, col, v) => Array.from({ length: row }).map(row => makeRow(col, v));

const cloneMatrix = (matrix) => Array.from({ length: matrix.length }).map((row, i) => [...matrix[i]]);

const getBoxPos = (arr, index) => {
  const boxCnt = Math.sqrt(arr.length);
  const boxIndex = Math.floor(index / boxCnt);
  const boxStartIndex = boxIndex * boxCnt;
  const boxEndIndex = boxStartIndex + boxCnt;
  return { boxCnt, boxIndex, boxStartIndex, boxEndIndex };
}

const getBoxDataFromMatrixIndex = (matrix, { rowIndex, colIndex }) => {
  const {
    // boxCnt: boxRowCnt,
    // boxIndex: boxRowIndex,
    boxStartIndex: boxRowStartIndex,
    boxEndIndex: boxRowEndIndex
  } = getBoxPos(matrix, rowIndex);
  const {
    // boxCnt: boxColCnt,
    // boxIndex: boxColIndex,
    boxStartIndex: boxColStartIndex,
    boxEndIndex: boxColEndIndex
  } = getBoxPos(matrix[0], colIndex);
  const boxData = [];
  for (let i = boxRowStartIndex; i < boxRowEndIndex; ++i) {
    for (let j = boxColStartIndex; j < boxColEndIndex; ++j) {
      boxData.push(matrix[i][j]);
    }
  }
  return boxData;
}

const makeSeqRow = (size) => makeRow(size).map((_, i) => i);

const shuffle = (arr) => {
  const cloned = [...arr];
  const { length } = cloned;
  for (let i = 0; i < length - 1; ++i) {
    const randomIndex = i + Math.floor(Math.random() * (length - i));
    [cloned[i], cloned[randomIndex]] = [cloned[randomIndex], cloned[i]];
  }
  return cloned;
}

const makeShuffledRow = (size) => shuffle(makeSeqRow(size));

const checkIsRightBoundary = (index, size) => index % size === size - 1;

const checkIsBottomBoundary = (index, size) => Math.floor(index / size) === size - 1;

const checkIsLeftBoundary = (index, size) => index % size === 0;

const checkIsTopBoundary = (index, size) => index < size;

const overrideMatrix = (defaultMatrix, matrix, fn) => {
  const cloned = cloneMatrix(defaultMatrix);
  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (fn(cell)) {
        cloned[i][j] = cell;
      }
    });
  });

  return cloned;
};

//
// ─── TEST OVERRIDEMATRIX ────────────────────────────────────────────────────────
//

// const defaultMatrix = [
//   [1,2,3],
//   [4,5,6]
// ];
// const matrix = [
//   [0,0,9],
//   [9,0,0]
// ];

// const overriden = overrideMatrix(defaultMatrix, matrix);

// console.log(overriden);

// ────────────────────────────────────────────────────────────────────────────────

const isEqualMatrix = (m1, m2) => {
  if (m1.length !== m2.length) {
    return false;
  }
  if (m1[0].length !== m2[0].length) {
    return false;
  }
  const rowLength = m1.length;
  const colLength = m1[0].length;
  for (let i = 0; i < rowLength; ++i) {
    for (let j = 0; j < colLength; ++j) {
      if (m1[i][j] !== m2[i][j]) {
        return false;
      }
    }
  }
  return true;
};


module.exports = {
  makeMatrix,
  cloneMatrix,
  getBoxDataFromMatrixIndex,
  makeShuffledRow,
  checkIsBottomBoundary,
  checkIsRightBoundary,
  checkIsLeftBoundary,
  checkIsTopBoundary,
  overrideMatrix,
  isEqualMatrix
};