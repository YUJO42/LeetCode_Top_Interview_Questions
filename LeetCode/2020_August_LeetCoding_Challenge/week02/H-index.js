/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  let result = 0;
  for (let [index, value] of citations.entries()) {
    const h = index + 1;

    if (value < h) {
      return result;
    }

    result = h;
  }

  return result;
};

console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([0])); // 0
