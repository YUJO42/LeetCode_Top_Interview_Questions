// 각 장르당 플레이 순서대로
// 장르 안에서 플레이 순서대로
// 같은 장르가 3번 이상 나오면 조금 나온거 하나 버리기

function solution(genres, plays) {
  var answer = [];
  const genreMap = new Map();
  let playsArr = [];

  for (let i = 0; i < genres.length; i++) {
    // 각 장르별 플레이수를 담은 맵을 만든다
    if (genreMap.has(genres[i])) {
      genreMap.set(genres[i], genreMap.get(genres[i]) + plays[i]);
    } else {
      genreMap.set(genres[i], plays[i]);
    }
    // 배열에 장르, 플레이수, 고유번호(index)를 담는다.
    playsArr[i] = [genres[i], plays[i], i];
  }

  // 가장 많이 재생된 순서대로 genreMap을 정렬
  const sortedGenreMap = [...genreMap].sort((x, y) => y[1] - x[1]);

  const answerMap = new Map();
  for (let i = 0; i < sortedGenreMap.length; i++) {
    answerMap.clear();
    for (let j = 0; j < playsArr.length; j++) {
      if (sortedGenreMap[i][0] === playsArr[j][0]) {
        answerMap.set(playsArr[j][2], playsArr[j][1]);
      }
    }
    let sortedAnswerMap = [...answerMap].sort((x, y) => {
      if (y[1] === x[1]) {
        return x[0] - y[0];
      } else {
        return y[1] - x[1];
      }
    });

    if (sortedAnswerMap.length < 2) {
      answer.push(sortedAnswerMap[0][0]);
    } else {
      answer.push(sortedAnswerMap[0][0]);
      answer.push(sortedAnswerMap[1][0]);
    }
  }

  return answer;
}

// test code

const genres1 = [
  "classic",
  "pop",
  "pop",
  "pop",
  "hiphop",
  "classic",
  "classic",
  "pop",
];
const plays1 = [500, 600, 600, 1000, 1500, 150, 800, 2500];

const genres2 = ["classic", "pop", "classic", "hiphop", "pop"];
const plays2 = [500, 600, 150, 800, 2500];

console.log(solution(genres1, plays1)); // output : [ 7, 3, 4, 6, 0 ]
console.log(solution(genres2, plays2)); // output : [ 4, 1, 3, 0, 2 ]
