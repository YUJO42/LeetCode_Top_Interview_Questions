function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[],
): number {
  if (!A) return 0;
  const map = new Map();
  let result: number = 0;

  for (let a of A) {
    for (let b of B) {
      map.set(-(a + b), map.get(-(a + b)) + 1 || 1);
    }
  }

  // console.log(map);

  for (let c of C) {
    for (let d of D) {
      result += map.has(c + d) ? map.get(c + d) : 0;
    }
  }

  return result;
}

// test code

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])); // 2
