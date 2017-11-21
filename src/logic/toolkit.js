//
// ──────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C H E C K   I S   A T   T H E   B O U N D A R Y : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//

// index: Specific index in the parent element.
// size: The count of son element of the parent height
//       or width
export const checkIsRightBoundary = (index, size) => index % size === size - 1;
export const checkIsBottomBoundary = (index, size) => Math.floor(index / size) === size - 1;
