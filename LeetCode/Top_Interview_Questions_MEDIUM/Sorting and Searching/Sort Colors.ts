/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
  let zero: number = 0;
  let two: number = nums.length - 1;

  for (let one = 0; one <= two; one++) {
    while (nums[one] === 2 && one < two) {
      let temp = nums[one];
      nums[one] = nums[two];
      nums[two] = temp;
      two--;
    }

    while (nums[one] === 0 && one > zero) {
      let temp = nums[one];
      nums[one] = nums[zero];
      nums[zero] = temp;
      zero++;
    }
  }
}

// test code

console.log(sortColors([2, 0, 2, 1, 1, 0]));
