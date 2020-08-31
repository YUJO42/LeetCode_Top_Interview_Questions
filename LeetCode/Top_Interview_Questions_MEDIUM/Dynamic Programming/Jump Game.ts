// TRY 1 - FAIL

// function canJump(nums: number[]): boolean {
//   if (nums.length === 1) return true;
//   if (nums[0] === 0) return false;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       if (nums[i - 1] < 2) return false;
//     }
//   }

//   return true;
// }

function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;

  let foundZero: boolean = false;
  let counter: number = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    const numZero = nums[i] === 0;

    if (!numZero && foundZero && nums[i] >= counter) foundZero = false;

    if (foundZero) counter += 1;

    if (numZero && !foundZero) {
      counter = 2;
      foundZero = true;
    }
  }

  return !foundZero;
}

// test code

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
