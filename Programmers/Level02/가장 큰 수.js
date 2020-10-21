function solution(numbers) {
  numbers.sort(
    (a, b) => b.toString() + a.toString() - (a.toString() + b.toString()),
  );
  return numbers.join('') == 0 ? '0' : numbers.join('');
}

// test code

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
