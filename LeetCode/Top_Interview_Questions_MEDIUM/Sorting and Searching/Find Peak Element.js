/**
 * @param {number[]} nums
 * @return {number}
 */

// @@@ TRY 1 @@@
// @@@ FAUL @@@@
// 문제를 잘못 이해한 듯, nums[i] < nums[i - 1] 이 조건이 아닌덧...

// var findPeakElement = function (nums) {
//   for (let i = 1; i <= nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       return i - 1;
//     }
//   }
//   return 0;
// };

// @@@ TRY 2 @@@
// @@@ SUCCESS @
// 문제 조건은 맞았는데 마지막에 peak이 없을 경우 return값이 올바르지 않았음.

var findPeakElement = function (nums) {
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return i - 1;
    }
  }
  return nums.length - 1;
};

// test code

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
