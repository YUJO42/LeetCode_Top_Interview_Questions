// function solution(n) {
//   const base = [4, 1, 2];
//   let index;
//   let result = '';

//   while (n) {
//     index = n % 3;
//     n = parseInt(n / 3);

//     if (index === 0) {
//       n -= 1;
//     }

//     result += base[index];
//   }

//   return result;
// }

function solution(n) {
  return n === 0
    ? ''
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

// test code

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11
