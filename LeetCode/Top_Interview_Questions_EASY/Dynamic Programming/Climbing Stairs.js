/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  const arr = [1, 1, 2, 3];
  for (let i = 4; i <= 45; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

// test code

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
console.log(climbStairs(45)); // 1836311903
