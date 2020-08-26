/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.includes(target)) {
    return [-1, -1];
  }

  let index = nums.indexOf(target);
  const result = [index];
  while (nums[index] === target) {
    index++;
  }
  result.push(index - 1);
  return result;
};

// test code

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
