// n = 전체 학생
// lost = 잃어버린 학생
// reserve = 여분 가져온 학생
function solution(n, lost, reserve) {
  let answer = n - lost.length;

  lost.sort();
  reserve.sort();

  for (let i = 0; i < lost.length; i++) {
    if (answer === n || lost.length === 0) {
      break;
    }
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        // lost.splice(lost.indexOf(lost[i]), 1);
        // reserve.splice(reserve.indexOf(reserve[j]), 1);
        lost[i] = -1;
        reserve[j] = -10;
        answer++;
      }
    }

    // console.log(lost);
    // console.log(reserve);
  }

  for (let i = 0; i < lost.length; i++) {
    if (answer === n || lost.length === 0) {
      break;
    }
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] + 1 === reserve[j]) {
        lost[i] = -1;
        reserve[j] = -10;
        answer++;
      }
      if (lost[i] - 1 === reserve[j]) {
        lost[i] = -1;
        reserve[j] = -10;
        answer++;
      }
    }
  }

  return answer;
}
// test codeW
console.log(solution(3, [3], [1])); // output : 2
console.log(solution(5, [2, 4], [3])); // output : 4
console.log(solution(5, [4, 5], [3, 4])); // output : 4
console.log(solution(5, [2, 4], [1, 3, 5])); // output : 5
console.log(solution(5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // output : 5
