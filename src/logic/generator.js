//
// ────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: G E N E R A T E   A   S O L V E D   S U D O K U   M A T R I X : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//

const makeRow = (length) => Array.from({ length }).fill(0);

const makeMatrix = (row, col) => Array.from({ length: row }).map(row => makeRow(col));

const cloneMatrix = (matrix) => Array.from({ length: matrix.length }).map((row, i) => [...matrix[i]]);

const isRowFillable = (matrix, rowIndex, n) => matrix[rowIndex].every(v => v !== n);

const isColFillable = (matrix, colIndex, n) => matrix.map(row => row[colIndex]).every(v => v !== n);

const getBoxPos = (arr, index) => {
  const boxCnt = Math.sqrt(arr.length);
  const boxIndex = Math.floor(index / boxCnt);
  const boxStartIndex = boxIndex * boxCnt;
  const boxEndIndex = boxStartIndex + boxCnt;
  return { boxCnt, boxIndex, boxStartIndex, boxEndIndex };
}

const getBoxDataFromMatrixIndex = (matrix, { rowIndex, colIndex }) => {
  const {
    boxCnt: boxRowCnt,
    boxIndex: boxRowIndex,
    boxStartIndex: boxRowStartIndex,
    boxEndIndex: boxRowEndIndex
  } = getBoxPos(matrix, rowIndex);
  const {
    boxCnt: boxColCnt,
    boxIndex: boxColIndex,
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

export default generate;

//
// ─── TEST ───────────────────────────────────────────────────────────────────────
//

// const sl = genSolution(9); 
// console.log(sl);