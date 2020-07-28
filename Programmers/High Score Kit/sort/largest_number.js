// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42746

// 1의 자리가 가장 큰 수로 정렬 후 join

// Try 1
//
function solution(numbers) {
  numbers.sort(
    (a, b) => b.toString() + a.toString() - (a.toString() + b.toString())
  );
  return numbers.join("") == 0 ? "0" : numbers.join("");
}

// test code

const num1 = [6, 10, 2];
const num2 = [3, 30, 34, 5, 9];

console.log(solution(num1)); // 6210
console.log(solution(num2)); // 9534330
