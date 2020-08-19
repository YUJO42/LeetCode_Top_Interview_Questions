/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const backtracking = (str: string, left: number, right: number): void => {
    if (!left && !right) {
      result.push(str);
      return;
    }

    if (left) backtracking(str + '(', left - 1, right);
    if (right > left) backtracking(str + ')', left, right - 1);
  };

  backtracking('', n, n);
  return result;
}

// test code

console.log(generateParenthesis(3));
// ['((()))', '(()())', '(())()', '()(())', '()()()'];
