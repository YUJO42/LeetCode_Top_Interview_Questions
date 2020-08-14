// function longestPalindrome(s: string): number {
//   const map = new Map();
//   let result: number = 0;
//   let maxOdd: number = 0;

//   for (let char of s) {
//     if (map.has(char)) {
//       map.set(char, map.get(char) + 1);
//     } else {
//       map.set(char, 1);
//     }
//   }

//   for (let val of map.values()) {
//     if (val % 2 === 0) {
//       result += val;
//     } else if (maxOdd < val) {
//       maxOdd = val;
//     }
//   }

//   return result + maxOdd;
// }

function longestPalindrome(s: string): number {
  const set = new Set();
  let result = 0;

  for (const char of s) {
    if (set.has(char)) {
      result += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return count + (set.size > 0 ? 1 : 0);
}

// test code

console.log(longestPalindrome('abccccdd'));
