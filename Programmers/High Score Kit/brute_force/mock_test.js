function solution(answers) {
  var answer = [];

  const user = [0, 0, 0];

  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern[0][i % 5]) user[0]++;
    if (answers[i] === pattern[1][i % 8]) user[1]++;
    if (answers[i] === pattern[2][i % 10]) user[2]++;
  }

  let max = Math.max(...user);

  for (let i = 0; i < 3; i++) {
    if (user[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

// test code

const answers1 = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];

console.log(solution(answers1)); // output : [1]
console.log(solution(answers2)); // output : [1, 2, 3]
