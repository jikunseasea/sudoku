// ──────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C H E C K   T H E   C U R R E N T   M A T R I X  : :  :   :    :     :        :
// ─────────────────────────────────────────────────────────────────────────────────────────────
//

const {
  makeMatrix,
  cloneMatrix,
  overrideMatrix,
  getBoxDataFromMatrixIndex
} = require("./matrix");

const checkCurrentMatrix = (matrix) => {
  const rowCnt = matrix.length;
  const colCnt = matrix[0].length;
  let marksMatrix = makeMatrix(rowCnt, colCnt, true);

  marksMatrix = checkRows(matrix, marksMatrix);
  marksMatrix = checkCols(matrix, marksMatrix);
  marksMatrix = checkBoxes(matrix, marksMatrix);

  return marksMatrix;
};

const checkArray = (arr) => {
  const { length } = arr;
  const rowMarks = arr.map(v => true);
  for (let i = 0; i < length - 1; ++i) {
    if (typeof arr[i] === 'number') {
      for (let j = i + 1; j < length; ++j) {
        if (arr[j] === arr[i]) {
          rowMarks[j] = rowMarks[i] = false;
        }
      }
    } else {
      rowMarks[i] = false;
    }
  }
  return rowMarks;
};

//
// ─── TEST CHECKARRAY ────────────────────────────────────────────────────────────
//

// const a = [1,2,3,4,5,4,2]
// const m = checkArray(a);
// console.log(m);

// ────────────────────────────────────────────────────────────────────────────────


const checkRows = (matrix, marksMatrix) => {
  const checkedRowsMatrix = matrix.map(row => checkArray(row));
  return overrideMatrix(marksMatrix, checkedRowsMatrix, v => v === false);
}


//
// ─── TEST CHECKROWS ─────────────────────────────────────────────────────────────
//

// const a = [
//   [4,2,3,4],
//   [5,6,7,6],
//   [9,10,11,11]
// ];

// const marks = [
//   [true, false, true, true],
//   [true, true, false, true],
//   [false, true, true, true]
// ];

// const checkedrows = checkRows(a, marks);
// console.log(checked);

// ────────────────────────────────────────────────────────────────────────────────


const checkCols = (matrix, marksMatrix) => {
  let overriden = cloneMatrix(marksMatrix);
  const { length: colCnt } = matrix[0];
  for (let i = 0; i < colCnt; ++i) {
    const unCheckedCol = matrix.map(row => row[i]);
    const checkedCol = checkArray(unCheckedCol);
    const checkedMatrix = checkedCol.map(v => {
      const postRow = Array.from({ length: colCnt });
      postRow[i] = v;
      return postRow;
    });
    overriden = overrideMatrix(overriden, checkedMatrix, v => v === false);
  }
  return overriden;
};

//
// ─── TEST CHECKCOLS ─────────────────────────────────────────────────────────────
//

// const b = [
//   [4,2,3,4],
//   [4,6,7,6],
//   [9,10,3,6]
// ];

// const marks = [
//   [true, true, true, true],
//   [true, true, false, true],
//   [true, true, true, false]
// ];

// const checked = checkCols(b, marks);
// console.log(checked);

// ────────────────────────────────────────────────────────────────────────────────

const checkBoxes = (matrix, marksMatrix) => {

  // boxCnt ** 2 === matrix.length === matrix[0].length

  const { length } = matrix;
  const boxCnt = Math.sqrt(length);

  let overriden = cloneMatrix(marksMatrix);

  for (let i = 0; i < length; i += boxCnt) {
    for (let j = 0; j < length; j += boxCnt) {
      const curBoxData = getBoxDataFromMatrixIndex(matrix, {
        rowIndex: i,
        colIndex: j
      });
      const checkedCurBoxData = checkArray(curBoxData);
      checkedCurBoxData.forEach((v, k) => {
        if (!v) {
          const rowIndex = i + Math.floor(k / boxCnt);
          const colIndex = j + k % boxCnt;
          overriden[rowIndex][colIndex] = v;
        }
      });
    }
  }

  return overriden;
};

//
// ─── TEST CHECKBOXES ────────────────────────────────────────────────────────────
//

// const m = [];
// for (let i = 0; i < 9; ++i) {
//   m.push(makeShuffledRow(9));
// }

// console.log(m);

// const marks = makeMatrix(9, 9, true);

// const checked = checkBoxes(m, marks);

// console.log(checked);


// const ma = require('./generator').generate(9);
// const checked2 = checkBoxes(ma, marks);
// console.log(checked2)

// ────────────────────────────────────────────────────────────────────────────────

const uncheckCurrentMatrix = (matrix) => {
  console.log(matrix);
  const cloned = cloneMatrix(matrix);
  const rowCnt = cloned.length;
  const colCnt = cloned[0].length;
  for (let i = 0; i < rowCnt; ++i) {
    for (let j = 0; j < colCnt; ++j) {
      if (cloned[i][j] === false) cloned[i][j] = null;
    }
  }

  return cloned;
}


module.exports = {
  checkCurrentMatrix, 
  uncheckCurrentMatrix
};


//
// ─── TEST CHECKCURRENTMATRIX ────────────────────────────────────────────────────
//

// const ma = require('./generator').generate(9);
// const marks = makeMatrix(9, 9, true);
// const checked2 = checkCurrentMatrix(ma);
// console.log(checked2)


// ma[1][1] = ma[2][2];
// const checked3 = checkCurrentMatrix(ma);
// console.log(checked3)

// ────────────────────────────────────────────────────────────────────────────────
