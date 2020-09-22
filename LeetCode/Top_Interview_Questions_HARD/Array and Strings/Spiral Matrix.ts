/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix: number[][]): number[] {
  const arr: number[] = [];

  while (matrix.length) {
    const first: any = matrix.shift();
    arr.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) arr.push(val);
      m.reverse();
    }
    matrix.reverse();
  }

  return arr;
}

// test code

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
