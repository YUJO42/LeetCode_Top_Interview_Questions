// // ***************** My Code *****************
// // Fail
// function isPalindrome(s: string): boolean {
//   const filter = s
//     .toLowerCase()
//     .split("")
//     .filter((char) => {
//       let charCode = char.charCodeAt(0);
//       return (
//         (charCode >= 48 && charCode <= 57) ||
//         (charCode >= 97 && charCode <= 122)
//       );
//     });

//   return filter.join("") === filter.reverse().join("");
// }

// function longestPalindrome(s: string): string {
//   let left: number = 0;
//   let middle: number = Math.ceil(s.length / 2);
//   let right: number = s.length - 1;
//   let result: string = "";

//   while (left < right) {
//     if (s[left] === s[right]) {
//       if (isPalindrome(s.substring(left, right))) {
//         result = s.substring(left, right);
//       }
//     }
//     if (middle - left > right - middle) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return result;
// }

// ***************** Solution *****************

function expandAroundCenter(s: string, left: number, right: number): number {
  let L: number = left;
  let R: number = right;

  while (L >= 0 && R < s.length && s.charCodeAt(L) === s.charCodeAt(R)) {
    L--;
    R++;
  }

  return R - L - 1;
}

function longestPalindrome(s: string): string {
  let start: number = 0;
  let end: number = 0;

  for (let i = 0; i < s.length; i++) {
    let len1: number = expandAroundCenter(s, i, i);
    let len2: number = expandAroundCenter(s, i, i + 1);

    let len: number = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      //   console.log(start);
      end = i + Math.floor(len / 2);
      //   console.log(end);
    }
  }

  return s.substring(start, end + 1);
}

// test code

console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
