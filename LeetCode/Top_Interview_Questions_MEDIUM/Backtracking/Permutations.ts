// function permute(nums: number[]): number[][] {
//   const result: number[][] = [];

//   const dfs = (curr, rest) => {
//     //
//     for (let i = 0; i < rest.length; i++) {
//       //
//     }
//   };

//   return result;
// }

// var permute = function (nums) {
//   // base case
//   if (nums.length <= 1) {
//     return [nums];
//   }

//   let result = [];
//   let last = nums.pop();

//   // recursive call
//   const prevPerms = permute(nums);

//   prevPerms.forEach((perm) => {
//     for (i = 0; i <= perm.length; i++) {
//       let nextPerm = perm.slice(0, i).concat([last]).concat(perm.slice(i));
//       result.push(nextPerm);
//     }
//   });

//   return result;
// };

// function permute(nums: number[]): number[][] {
//   if (nums.length <= 1) {
//     return [nums];
//   }

//   const result: number[][] = [];
//   let last = nums.pop();

//   const recursive = permute(nums);

//   recursive.forEach((perm) => {
//     for (let i = 0; i <= perm.length; i++) {
//       const nextPerm = perm.slice(0, i).concat([last]).concat(perm.slice(i));
//       result.push(nextPerm);
//     }
//   });

//   return result;
// }

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtracking = (first: number) => {
    if (first === nums.length) result.push([...nums]);

    for (let i = first; i < nums.length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtracking(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  };

  backtracking(0);
  return result;
}

// test code

console.log(permute([1, 2, 3]));
