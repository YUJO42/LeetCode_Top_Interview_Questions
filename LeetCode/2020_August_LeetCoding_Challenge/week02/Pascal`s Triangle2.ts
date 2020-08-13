function getRow(rowIndex: number): number[] {
  if (!rowIndex) return [1];

  let result: number[] = [1, 1];

  while (--rowIndex) {
    const next: number[] = [];

    for (let i = 0; i < result.length - 1; i++) {
      next.push(result[i] + result[i + 1]);
    }

    result = [1, ...next, 1];
  }

  return result;
}

// test code

console.log(getRow(3)); // [1, 3, 3, 1]
