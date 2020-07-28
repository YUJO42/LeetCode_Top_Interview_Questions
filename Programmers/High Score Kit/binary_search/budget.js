function solution(budgets, M) {
  var answer = 0;
  var len = budgets.length;
  var remain = M;

  budgets.sort((x, y) => x - y);

  if (budgets[0] > M) {
    return answer;
  }
  for (var i = 0; i < len; i++) {
    remain -= budgets[i];
    if (remain < 0) {
      answer = i;
      break;
    }
  }
  if (answer === 0) {
    answer = len;
  }

  return answer;
}

//test code
const budgets = [120, 110, 140, 150];
const M = 485;

console.log(solution(budgets, M)); // output : 127
