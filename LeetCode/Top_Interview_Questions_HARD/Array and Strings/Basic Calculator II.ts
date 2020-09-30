function calculate(s: string): number {
  s.replace(/\s/g, ''); // 문자열 전체 공백 제거

  return 0;
}

// test code

console.log(calculate('3 + 2 * 2'));
console.log(calculate('3/2'));
console.log(calculate('  3 + 5 / 2'));
