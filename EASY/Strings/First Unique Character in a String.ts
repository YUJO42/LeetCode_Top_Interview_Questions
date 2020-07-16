function firstUniqChar(s: string): number {
  const map = new Map();
  for (let key of s) {
    map.set(key, map.get(key) + 1 || 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}

// test code

console.log(firstUniqChar("leetcode")); // output : 1
console.log(firstUniqChar("loveleetcode")); // output : 2
