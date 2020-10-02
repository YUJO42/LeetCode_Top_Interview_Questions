// Solution 01
// runtime : 88ms (40%)
// memory : 40.3mb (30%)

// function search(nums: number[], target: number): boolean {
// 	return nums.includes(target);
// };


function search(nums: number[], target: number): boolean {
	for (let num of nums) {
		if (num === target) return true;
	}
	return false;
};
