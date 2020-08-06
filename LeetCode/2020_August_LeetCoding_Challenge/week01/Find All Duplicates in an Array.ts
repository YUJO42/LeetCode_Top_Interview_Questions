function findDuplicates(nums: number[]): number[] {
  const arr: number[] = [];
  const map = new Map();

  for (let num of nums) {
    if (map.has(num) === false) {
      map.set(num, 1);
    } else {
      if (arr.indexOf(num) === -1) arr.push(num);
    }
  }

  return arr;
}

// test code

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
