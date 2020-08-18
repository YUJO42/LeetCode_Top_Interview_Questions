function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const arr: string[][] = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];
  const result: string[] = [];

  function premute(str, idx) {
    if (idx === digits.length) {
      result.push(str);
      return;
    }

    for (let alpha of arr[digits[idx]]) {
      premute(str + alpha, idx + 1);
    }
  }

  premute('', 0);

  return result;
}

// test code

console.log(letterCombinations('23'));
