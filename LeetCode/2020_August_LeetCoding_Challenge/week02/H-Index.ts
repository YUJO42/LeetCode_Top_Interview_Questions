// FAIL
// reduce() method does not compile in LeetCode

// function hIndex(citations: number[]): number {
//   const max: number = citations.reduce((a, b) => {
//     return Math.max(a, b);
//   });

//   if (max === 0) return 0;

//   let answer: number = 0;
//   const sortedArr: number[] = citations.sort((x, y) => x - y);
//   for (let i = 0; i <= citations.length - 1; i++) {
//     if (sortedArr[i] >= sortedArr.length - 1 - i) {
//       answer++;
//     }
//   }

//   return answer;
// }

// function hIndex(citations: number[]): number {
//   let map: any = {};
//   let len: number = citations.length;
//   let max: number = 0;

//   citations.map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
//   for (let i = 0; i < len; i++) {
//     max = Math.max(max, len >= i ? i : 0);
//     len -= map[i] ? map[i] : 0;
//   }

//   return max;
// }

function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);

  let result: number = 0;

  const citationsMap = citations.entries();
  fot (let [i, val] in citationsMap) {
      const h : number = i + 1;

      if (val < h) {
          return result;
      }

      result = h;
  }

  return result;
}

// test code

console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([0])); // 0
