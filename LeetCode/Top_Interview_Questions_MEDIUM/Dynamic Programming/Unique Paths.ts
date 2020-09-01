function uniquePaths(m: number, n: number): number {
  const dp: number[] = new Array(n + 1).fill(1);

  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      dp[col] = dp[col] + dp[col + 1];
    }
  }
  return dp[1];
}

// test code

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
