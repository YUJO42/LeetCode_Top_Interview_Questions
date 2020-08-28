/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function merge(intervals) {
  if (!intervals.length) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  let res = [prev];

  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }

  return res;
}

// test code

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
);
