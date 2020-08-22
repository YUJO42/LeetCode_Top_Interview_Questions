function exist(board: string[][], word: string): boolean {
  let result: boolean = false;

  const check = (row: number, col: number, i: number): void => {
    if (!result) {
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
        return;
      }
      if (board[row][col] != word[i]) {
        return;
      }
      if (i === word.length - 1) {
        result = true;
        return;
      }
      board[row][col] = 'used';
      check(row, col + 1, i + 1);
      check(row, col - 1, i + 1);
      check(row + 1, col, i + 1);
      check(row - 1, col, i + 1);
      board[row][col] = word[i];
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        check(i, j, 0);
        if (result) return result;
      }
    }
  }

  return result;
}

// test code

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED',
  ),
);

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
  ),
);

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB',
  ),
);
