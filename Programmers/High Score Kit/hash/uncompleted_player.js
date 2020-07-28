function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// test code

const p1 = ["leo", "kiki", "eden"];
const p2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const p3 = ["mislav", "stanko", "mislav", "ana"];
const c1 = ["eden", "kiki"];
const c2 = ["josipa", "fillipa", "marina", "nikola"];
const c3 = ["stanko", "ana", "mislav"];

console.log(solution(p1, c1)); // output : "leo"
console.log(solution(p2, c2)); // output : "vinko"
console.log(solution(p3, c3)); // output : "mislav"
