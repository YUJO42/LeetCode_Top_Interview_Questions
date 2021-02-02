/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* 
  SUCCESS 
   Runtime : 84ms 
   Memory  : 46MB
*/
const containsDuplicate = (nums) => {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      return true;
    }
    map.set(num, 1);
  }

  return false;
};

/* 
  SUCCESS 
   Runtime : 1860ms 
   Memory  : 46MB
*/
const containsDuplicate2 = (nums) => {
  while (nums.length > 1) {
    const currentNumber = nums.shift();
    if (nums.includes(currentNumber)) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
