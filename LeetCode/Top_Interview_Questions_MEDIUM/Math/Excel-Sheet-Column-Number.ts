function titleToNumber(s: string): number {
  let result: number = 0;
  for (let i = 0; i < s.length; i++) {
    let char: number = s[s.length - 1 - i].charCodeAt(0);
    result += Math.pow(26, i) * (char - 64);
  }

  return result;
}
