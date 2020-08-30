/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// solution 1 - 704ms
var searchMatrix1 = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(target)) return true;
  }
  return false;
};

// solution 2 - 92ms
var searchMatrix2 = function (matrix, target) {
  if (!matrix.length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) col--;
    else row++;
  }

  return false;
};

// test code

console.log(
  searchMatrix1(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
); // -> true

console.log(
  searchMatrix2(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20,
  ),
); // -> false
