function reverse(x: number): number {
  let isminus: number = x > 0 ? 1 : -1;
  let result: number =
    isminus * parseInt(x.toString().split("").reverse().join(""));
  if (-2147483648 <= result && result <= 2147483649) {
    return result;
  }
  return 0;
}
