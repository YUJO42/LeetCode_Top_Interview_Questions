function numIslands(grid: string[][]): number {
  let result: number = 0;

  const recursive = (row: number, col: number): void => {
    if (row < 0 || row >= grid.length || grid[row][col] !== '1') return;
    grid[row][col] = '0';

    recursive(row - 1, col); // up
    recursive(row + 1, col); // down
    recursive(row, col - 1); // left
    recursive(row, col + 1); // right
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        result++;
        recursive(row, col);
      }
    }
  }

  return result;
}
