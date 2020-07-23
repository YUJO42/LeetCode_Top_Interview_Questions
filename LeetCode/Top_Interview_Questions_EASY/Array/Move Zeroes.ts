/**
 Do not return anything, modify nums in-place instead.
 */

// try 1 fail
// fail input : [2, 1]
// my ouput : [1, 2]
// expected : [2, 1]
// 정렬을 사용하면 안되는 듯

// function moveZeroes(nums: number[]): void {
//   let checkZero: number = 0;
//   let index: number = 0;

//   nums.sort((x, y) => x - y);

//   while (nums[index] === 0) {
//     nums.shift();
//     checkZero++;
//   }

//   for (let i = 0; i < checkZero; i++) {
//     nums.push(0);
//   }
// }

function moveZeroes(nums: number[]): void {
  let checkZero: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      checkZero++;
      nums.splice(i--, 1);
    }
  }

  for (let i = 0; i < checkZero; i++) {
    nums.push(0);
  }

  //   console.log(nums);
}

// test code

console.log(moveZeroes([0, 1, 0, 3, 12])); // output : [1, 3, 12, 0 , 0]
console.log(moveZeroes([2, 1])); // output : [2, 1]
