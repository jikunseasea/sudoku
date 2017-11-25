//
// ────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: G E N E R A T E   A   P U Z Z L E D   M A T R I X : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────
//

// const { LEVEL: level } = require('../constants/game');
const { makeMatrix } = require('./matrix');

const puzzle = (size, difficulty) => (
  makeMatrix(size, size).map(row => (
    row.map(v => Math.random() > difficulty ? true : false)
  ))
);


module.exports = { puzzle };


//
// ─── TEST PUZZLE ────────────────────────────────────────────────────────────────
//

// const puzzled = puzzle(9);
// console.log(puzzled);

// ────────────────────────────────────────────────────────────────────────────────
