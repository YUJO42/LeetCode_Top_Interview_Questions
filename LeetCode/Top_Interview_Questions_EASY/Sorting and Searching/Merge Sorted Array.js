/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length);

  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }

  nums1.sort((x, y) => x - y);
}
