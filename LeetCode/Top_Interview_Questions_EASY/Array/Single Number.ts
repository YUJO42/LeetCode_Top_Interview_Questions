// function singleNumber(nums: number[]): number {
//   const map = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }

//   const arr = [...map];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][1] === 1) {
//       return arr[i][0];
//     }
//   }
// }

function singleNumber(nums: number[]): number {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return -1;
}

// test code
console.log(singleNumber([4, 1, 2, 1, 2])); // output : 4
console.log(singleNumber([2, 2, 1])); // output : 1
