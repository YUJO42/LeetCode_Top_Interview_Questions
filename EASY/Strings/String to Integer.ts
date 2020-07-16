function myAtoi(str: string): number {
  let result = parseInt(str);
  if (isNaN(result)) {
    return 0;
  }

  if (result <= -2147483648) {
    return -2147483648;
  }

  if (result >= 2147483647) {
    return 2147483647;
  }
  return result;
}

// test code

console.log(myAtoi("                     -42")); // -42
console.log(myAtoi("                     -+2")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
