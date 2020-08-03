// fail
// 배열 내 중복값을 잡지 못함

// function threeSum(nums: number[]): number[][] {
//   const result: number[][] = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const temp = [nums[i], nums[j], nums[k]];

//           if (result.indexOf(temp) === -1) {
//             result.push(temp);
//           }
//         }
//       }
//     }
//   }
//   return result;
// }

// 투 포인터
// @seongwpa님 코드 참고함

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left: number = i + 1;
    let right: number = nums.length - 1;

    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s < 0) {
        left += 1;
      } else if (s > 0) {
        right -= 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right + 1]) right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }

  return result;
}

// test code

console.log(threeSum([-1, 0, 1, 2, -1, 4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
