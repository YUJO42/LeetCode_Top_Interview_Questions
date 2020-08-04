function isPowerOfFour(num: number): boolean {
  if (num === 4 || num === 1) return true;
  if (num < 4) return false;

  return isPowerOfFour(num / 4);
}

// test code

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
