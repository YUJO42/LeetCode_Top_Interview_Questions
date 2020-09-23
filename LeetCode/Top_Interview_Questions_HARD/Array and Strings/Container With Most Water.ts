function maxArea(height: number[]): number {
  let result: number = 0;
  let leftIndex: number = 0;
  let rightIndex: number = height.length - 1;

  while (leftIndex < rightIndex) {
    const left: number = height[leftIndex];
    const right: number = height[rightIndex];

    const x = rightIndex - leftIndex;
    const y = Math.min(left, right);

    result = Math.max(result, x * y);

    if (left > right) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return result;
}

// test code

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
