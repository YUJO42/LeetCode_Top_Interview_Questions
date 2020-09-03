function lengthOfLIS(nums: number[]): number {
  const list: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    list.push(1);
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) list[i] = Math.max(list[i], list[j] + 1);
    }
  }
  return nums.length ? Math.max(...list) : 0;
}

// test code

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
