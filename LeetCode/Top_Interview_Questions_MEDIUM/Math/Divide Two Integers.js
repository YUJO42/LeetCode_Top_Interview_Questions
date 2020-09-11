/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  return parseInt(dividend / divisor) > 2147483647
    ? 2147483647
    : parseInt(dividend / divisor);
};

// test code

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-2147483648, -1));
