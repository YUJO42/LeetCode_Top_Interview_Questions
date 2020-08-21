// function subsets(nums: number[]): number[][] {
//   const result: number[][] = [];

//   for (let num of nums) {
//     const append: number[] = [];
//     for (let entry of result) {
//       append.push([...entry, num]);
//     }
//     result.push(...append);
//   }

//   return result;
// // }

// function subsets(nums: number[]): number[][] {
//   const result: number[][] = [];

//   const build = (head = [], left = nums) => {
//     result.push(head);

//     if (left.length === 0) return;

//     for (let i = 0; i < left.length; i++) {
//       build(
//         [...head, left[i]],
//         left.filter((_, j) => j > i),
//       );
//     }

//     build();
//   };
// }

// test code

function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]];
  for (let i = 0; i < nums.length; i++) {
    result.forEach((item) => {
      result.push([...item, nums[i]]);
    });
  }
  return result;
}

console.log(subsets([1, 2, 3]));
// [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
