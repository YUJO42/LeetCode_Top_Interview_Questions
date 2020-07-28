// function solution(number, k) {
//   var b = [];

//   for (var i = 0; i < number.length; i++) {
//     var c = number[i];
//     while (k > 0 && b.length > 0 && b[b.length - 1] < c) {
//       b.pop();
//       k--;
//     }
//     b.push(c);
//   }

//   b.splice(b.length - k, k);

//   return b.join("");
// }

function solution(number, k) {
  let length = number.length - k;

  console.log(length);

  const answer = []

  while (answer.length === length) {
    if (answer.length === )
  } 
}

// test code

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
