/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const arr = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let wordToNum = 0;
    for (let char of strs[i]) {
      wordToNum += char.charCodeAt(0);
    }
    map.set(i, wordToNum);
  }

  const mapToArr = [...map].sort((x, y) => x[1] - y[1]);
  console.log(mapToArr);

  for (let i = 0; i < mapToArr.length; i++) {}

  return arr;
};
// test code

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
