function isValidSudoku(board: string[][]): boolean {
  const map = new Map();

  // horizontal check
  for (let i = 0; i < board.length; i++) {
    map.clear();
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == ".") {
        continue;
      } else if (map.has(board[i][j])) {
        return false;
      } else {
        map.set(board[i][j], 1);
      }
    }
  }

  // vertical check
  for (let i = 0; i < board.length; i++) {
    map.clear();
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] == ".") {
        continue;
      } else if (map.has(board[j][i])) {
        return false;
      } else {
        map.set(board[j][i], 1);
      }
    }
  }

  // 3 * 3 map check
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      map.clear();
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          if (board[x][y] == ".") {
            continue;
          } else if (map.has(board[x][y])) {
            return false;
          } else {
            map.set(board[x][y], 1);
          }
        }
      }
    }
  }

  return true;
}
