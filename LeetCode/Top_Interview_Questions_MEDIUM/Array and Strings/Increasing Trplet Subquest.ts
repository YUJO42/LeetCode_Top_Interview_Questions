function increasingTriplet(nums: number[]): boolean {
	let min : number = nums[0];
	let second : number = Infinity;
	let count = 1;
	for (let num of nums) {
		if (num <= min) {
			min = num;
		} else if (num <= second) {
			second = num;
		} else {
			return true;
		}
		count += 1;

		// console.log(`${count} min : ${min} second : ${second}` )
	}

	return false;
};

// test code

console.log(increasingTriplet([1, 2, 3, 4 ,5])); // true;
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false;
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // ture;

