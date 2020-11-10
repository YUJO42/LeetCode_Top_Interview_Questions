function solution(brown, yellow) {
  let sum = brown + yellow;
  let x =0, y = 0, minus;

  for (let i = 3; i <= sum; i++) {
    for (let j = 1; j <= i; j++) {
      if (i * j === sum) {
         if (-(i - j) < minus){ x = i;
          y = j;
          return [i, j];
        }
        
    }
  }
}

// test code

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
