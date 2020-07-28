function solution(citations) {
  let answer = 0;
  const sortedArr = citations.sort((x, y) => x - y);
  console.log(citations);
  for (let i = 0; i <= citations.length - 1; i++) {
    if (sortedArr[i] >= sortedArr.length - 1 - i) {
      answer++;
    }
  }
  return answer;
}

// test code

citations = [3, 0, 6, 1, 5]; // return 3;
console.log(citations.length);
console.log(solution(citations));
