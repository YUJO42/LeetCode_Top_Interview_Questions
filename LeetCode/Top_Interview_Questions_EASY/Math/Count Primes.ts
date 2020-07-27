function countPrimes(n: number): number {
  let count = 0;
  let isPrime = new Array(n).fill(true);

  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) isPrime[j] = false;
  }

  for (let i = 1; i < n; i++) {
    if (isPrime[i] === true) {
      count++;
    }
  }
  return count;
}

// test code

console.log(countPrimes(10)); // 4
console.log(countPrimes(2)); // 0
