function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[],
): number {
  if (!A || !B || !C || !D) return 0;
  const map = new Map();
  let result = 0;

  for (let a of A) {
    for (let b of B) {
      map.has(-(a + b))
        ? map.set(-(a + b), 1)
        : map.set(-(a + b), map.get(a + b) + 1);
    }
  }

  console.log(map);

  for (let c of C) {
    for (let d of D) {
      result += map.has(c + d) ? map.get(c + d) : 0;
    }
  }

  return result;
}

// test code

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])); // 2
