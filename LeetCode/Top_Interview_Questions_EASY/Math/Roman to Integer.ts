function romanToInt(s: string): number {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let i: number = s.length - 1;
  let result: number = map.get(s[i]);

  while (i > 0) {
    const curr: number = map.get(s[i]);
    const prev: number = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
}
