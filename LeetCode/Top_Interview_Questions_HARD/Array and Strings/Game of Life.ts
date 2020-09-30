/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  let x: number = board.length;
  let y: number = board[0].length;
}

// test code

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ]),
);

/* output
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
*/
