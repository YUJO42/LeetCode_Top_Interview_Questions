function lengthOfLongestSubstring(s: string): number {
  const set: Set<number> = new Set();
  let len: number = s.length;
  let result: number = 0;
  let i: number = 0;
  let j: number = 0;

  while (i < len && j < len) {
    if (!set.has(s.charCodeAt(j))) {
      set.add(s.charCodeAt(j++));
      result = Math.max(result, j - i);
    } else {
      set.delete(s.charCodeAt(i++));
    }
  }

  return result;
}

// test code

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
