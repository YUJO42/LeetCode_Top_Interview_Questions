function solution(name) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let current = 0;
  let result = 0;
  const arr = name.split('');
  for (const char of arr) {
    const target = alphabet.indexOf(char);
    const min = Math.min(
      Math.abs(target - current),
      Math.abs(26 - Math.abs(target - current)),
    );

    result += min;
    current = target;
  }

  return result;
}

// Test Code

console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23
