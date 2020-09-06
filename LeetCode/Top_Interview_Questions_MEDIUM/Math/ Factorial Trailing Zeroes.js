/**
 * @param {number} n
 * @return {number}
 */

// @@ FAIL @@
// var trailingZeroes = function (n) {
//   let sum = 1;
//   while (n > 1) {
//     sum *= n;
//     n--;
//   }

//   const sumToArr = sum.toString().split('');
//   console.log(sumToArr);
//   return sumToArr.filter((x) => x == 0).length;
// };

// @@ FAIL 2 @@
// const trailingZeroes = (n) => {
//   if (n === 0) return 0;
//   return parseInt(n / 5) + trailingZeroes(n / 5);
// };

const trailingZeroes = (n) => {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
};

// test code

console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(7)); // 1
