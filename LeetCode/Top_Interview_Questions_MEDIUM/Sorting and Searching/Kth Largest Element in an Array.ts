function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}

// test code

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
