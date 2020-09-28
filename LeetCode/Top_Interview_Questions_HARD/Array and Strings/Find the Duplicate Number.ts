function findDuplicate(nums: number[]): number {
  const map = new Map();

  for (let num of nums) {
    // map.has(num) ? map.set(num, 1) : map.set(num, map.get(num) + 1);
    if (map.has(num)) return num;
    else map.set(num, 1);
  }

  return 0;
}

// test code

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); //3
console.log(findDuplicate([1, 1])); // 1
console.log(findDuplicate([1, 1, 2])); // 1
