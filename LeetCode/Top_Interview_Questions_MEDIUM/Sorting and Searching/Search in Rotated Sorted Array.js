/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return nums.indexOf(target);
};

// test code

console.log(search([1], 0)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // -1
