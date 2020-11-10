// people.length = 1 ~ 50.000
// people[i].value = 40 ~ 240
// boat = 40 ~ 240

function solution(people, limit) {
  let count = 0;

  people = people.sort((a, b) => a - b);
  console.log(people);
}

// test code

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
// console.log(solution([70, 80, 50, 50, 50, 50, 50, 40], 100)); // 3
