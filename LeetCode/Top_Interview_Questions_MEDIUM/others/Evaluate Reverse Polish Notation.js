/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  };

  for (let token of tokens) {
    if (operator[token]) {
      const top = stack.pop();
      const second = stack.pop();
      stack.push(operator[token](second, top));
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};
// test code

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(
  evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ]),
); // 22
