/**
 * @param {string} s
 * @return {boolean}
 */

// Time Over
// var validPalindrome = function (s) {
//   const arr = s.split('');
//   if (arr.join('') === arr.reverse().join('')) return true;

//   for (let i = 0; i < arr.length; i++) {
//     const temp = [...arr];
//     temp.splice(i, 1);
//     if (temp.join('') === temp.reverse().join('')) return true;
//   }

//   return false;
// };

var validPalindrome = function (s, flag = true) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    }

    if (!flag) return false;

    return (
      validPalindrome(s.slice(left, right), 0) ||
      validPalindrome(s.slice(left + 1, right + 1), false)
    );
  }

  return true;
};

// test code

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
