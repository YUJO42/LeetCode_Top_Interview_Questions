// @@ TRY 1 FAIL @@
// 배열의 앞에 존재하는 값들의 증가 폭이 가장 클 경우는 잡을 수 있지만
// 뒷 부분에 보다 큰 증가 폭이 존재할 때 잡지 못함
// 가장 간단한 해결책은 각 시작 노드별로 반복문을 2번 돌리는건데
// 이렇게 되면 시간 복잡도가 너무 올라갊 다른 방법 생각 필요

// function longestConsecutive(nums: number[]): number {
//   if (!nums.length) return 0;

//   nums.sort((a, b) => a - b);
//   const set = new Set(nums);

//   console.log(set);
//   let result: number = 1;

//   for (let i = 1; i < [...set].length; i++) {
//     if ([...set][i - 1] + 1 === [...set][i]) {
//       result++;
//     } else {
//       break;
//     }
//   }

//   return result;
// }

// @@ TRY 2 FAIL @@
// 시간 복잡도가 O(n^2)가 도버리면서 Time LImit Exceeded 가 나옴.

// function longestConsecutive(nums: number[]): number {
//   if (!nums.length) return 0;
//   nums.sort((a, b) => a - b);
//   const set = new Set(nums);

//   let result: number = 1;
//   for (let i = 0; i < [...set].length; i++) {
//     let current = 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       if ([...set][j - 1] + 1 === [...set][j]) {
//         current++;
//       } else {
//         break;
//       }
//     }
//     result = Math.max(result, current);
//   }
//   return result;
// }

function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  const set = new Set(nums);
  let result: number = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;

    let current = num;
    let max = 1;

    while (set.has(current + 1)) {
      current++;
      max++;
    }
    result = Math.max(result, max);
  }

  return result;
}

// test code

console.log(longestConsecutive([100, 4, 200, 1, 1, 3, 2]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
