/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    FAIL
    reduce를 사용해서 배열 요소들의 곱한 값을 더하면 될 줄 알았는데 접근을 잘못 함
    출력값이 예시와 다름
*/

const productExceptSelf_Fail1 = (nums) => {
  const result = [];

  while (nums.length) {
    nums.shift();
    result.push(
      nums.reduce((acc, crr) => {
        return acc * crr;
      }, 1),
    );
  }

  return result;
};

/*
    SUCCESS
    rundtime : 136ms / 35.73%
    Memory   : 50.8MB / 16.05%
*/

const productExceptSelf = (nums) => {
  const result = new Array(nums.length).fill(1);

  let multiply = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= multiply;
    multiply *= nums[i];
  }

  multiply = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= multiply;
    multiply *= nums[j];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
