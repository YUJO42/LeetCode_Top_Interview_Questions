// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42746

// Try 1
// Fail ( 85.7 / 100)
// Test 2 Fail
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let result = array.slice(commands[i][0] - 1, commands[i][1]);
    result.sort((x, y) => x - y);
    answer.push(result[commands[i][2] - 1]);
  }

  return answer;
}

// Try 2
// Success
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let result = array.slice(commands[i][0] - 1, commands[i][1]);
    // result.sort((x, y) => x - y);
    result.sort(function (x, y) {
      return x - y;
    });
    answer.push(result[commands[i][2] - 1]);
  }

  return answer;
}

// test code

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log(solution(array, commands)); // output : [5, 6, 3]
