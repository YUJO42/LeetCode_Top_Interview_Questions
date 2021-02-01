/**
 * @param {number[]} prices
 * @return {number}
 */

/* FAIL : Time Over

 const maxProfit = (prices) => {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    const max = Math.max(...prices.slice(i, prices.length)) - prices[i];
    if (max > result) {
      result = max;
    }
  }

  return result;
};
*/

const maxProfit = (prices) => {
  let result = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if (prices[i] - min > result) {
      result = prices[i] - min;
    }
  }

  return result;
};

console.log(maxProfit([7, 1, 5, 3, 4, 6])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
