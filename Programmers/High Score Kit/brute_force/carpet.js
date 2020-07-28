function solution(brown, yellow) {
  var answer = [];

  for (var i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      if ((yellow / i + i) * 2 + 4 === brown) {
        answer.push(i + 2);
        answer.push(yellow / i + 2);
        break;
      }
    }
  }

  answer.sort((a, b) => b - a);

  return answer;
}
