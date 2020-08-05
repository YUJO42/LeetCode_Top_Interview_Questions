function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const map: any = {};

  for (const str of strs) {
    const sorted: string = str.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [str];
    } else {
      map[sorted].push(str);
    }
  }

  for (const arr in map) {
    result.push(map[arr]);
  }
  return result;
}
// test code

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
