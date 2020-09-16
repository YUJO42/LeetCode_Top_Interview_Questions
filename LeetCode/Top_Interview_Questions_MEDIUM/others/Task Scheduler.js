/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  if (n === 0) return tasks.length;

  const map = {};
  for (let t of tasks) {
    if (map[t] == null) map[t] = 0;
    map[t]++;
  }

  let max = 0;
  for (let t in map) {
    max = Math.max(max, map[t]);
  }

  let count = 0;
  for (let t in map) {
    if (map[t] === max) {
      count++;
    }
  }

  return Math.max(
    (max - 1) * (n + 1) + count,

    tasks.length,
  );
}
// test code

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)); // 6
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)); // 8
console.log(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
); // 16
