// @@@ TRY 1 @@@
// FAIL
// D

// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map();
//   const result: number[] = [];

//   nums.forEach((n) => map.set(n, map.get(n) + 1 || 0));

//   for (let num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }

//   console.log(map);

//   // for (let key of map.keys()) {
//   //   if (map.get(key) >= k) {
//   //     result.push(key);
//   //   }
//   // }

//   return result;
// }

// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map();
//   const result: number[] = [];

//   nums.forEach((n) => map.set(n, map.get(n) + 1 || 0));

//   console.log(map);
//   console.log([...map]);

//   let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

//   console.log(sortedArray);

//   for (let i = 0; i < k; i++) {
//     result.push(sortedArray[i][0]);
//   }

//   return result;
// }

// test code

let arr1: any = { a: 2 };
const arr2: any = { b: 1 };

const arr3: any = [...arr1];

console.log(arr3);

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //  [1, 2]
// // console.log(topKFrequent([1], 1)); // [1]
