function productExceptSelf(nums: number[]): number[] {
  const arr: number[] = Array(nums.length);

  let left: number = 1;
  let right: number = 1;

  for (let i = 0; i < nums.length; i++) {
    arr[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] *= right;
    right *= nums[i];
  }

  return arr;
}

// test code

console.log(productExceptSelf([1, 2, 3, 4]));
