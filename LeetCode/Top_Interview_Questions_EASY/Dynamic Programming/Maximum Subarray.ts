function maxSubArray(nums: number[]): number {
  let sum: number = nums[0];
  let maxSum: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// test code

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
