// @@@ TRY 1 @@@
// FAIL
// D

// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map();
//   const result: number[] = [];

//   for (let num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }

//   for (let key of map.keys()) {
//     if (map.get(key) >= k) {
//       result.push(key);
//     }
//   }

//   return result;
// }

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  const result: number[] = [];

  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0]);
  }

  return result;
}

// test code

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //  [1, 2]
console.log(topKFrequent([1], 1)); // [1]
