// fail
// 배열 내 중복값을 잡지 못함

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const temp = [nums[i], nums[j], nums[k]];

          if (result.indexOf(temp) === -1) {
            result.push(temp);
          }
        }
      }
    }
  }
  return result;
}

// test code

console.log(threeSum([-1, 0, 1, 2, -1, 4]));
