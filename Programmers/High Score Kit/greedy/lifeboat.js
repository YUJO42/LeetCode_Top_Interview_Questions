function solution(people, limit) {
  let count = 0;

  people.sort((x, y) => x - y);

  //   let index = 0;
  //   let currentMax = 0;
  //   while (index < people.length) {
  //     let sum = 0;
  //     while (sum + currentMax <= limit) {
  //       sum += people[index];
  //       currentMax = people[index + 1];
  //       index++;
  //     }
  //     count++;
  //   }

  let back = people.length - 1;

  for (let front = 0; front <= back; front++) {
    while (front < back && people[front] + people[back] > limit) {
      count++;
      back--;
    }
  }

  return count;
}

// test code

console.log(solution([70, 50, 80, 50], 100)); //output : 3
console.log(solution([70, 80, 50], 100)); //output : 3
console.log(solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)); // output : 5
