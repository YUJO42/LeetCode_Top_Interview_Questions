function intersect(nums1: number[], nums2: number[]): number[] {
  const baseSet = nums1.length > nums2.length ? nums1 : nums2;
  const subSet = nums1.length > nums2.length ? nums2 : nums1;
  const result = [];

  for (let i = 0; i < subSet.length; i++) {
    if (baseSet.indexOf(subSet[i]) !== -1) {
      result.push(subSet[i]);
      baseSet.splice(baseSet.indexOf(subSet[i]), 1);
    }
  }
  return result;
}

// test code

console.log(intersect([1, 2, 2, 1], [2, 2])); // output : [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // output : [4, 9]
