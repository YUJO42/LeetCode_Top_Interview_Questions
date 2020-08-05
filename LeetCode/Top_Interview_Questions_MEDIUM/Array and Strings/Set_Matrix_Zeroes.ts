/**
 Do not return anything, modify matrix in-place instead.
 */

// solved
// Set()을 사용해서 중복을 제거한 배열을 담으면 효율이 훨씬 좋아질거 같은데
// 왜인지 Typescript에서 Set()이 실행되지 않는다. 이유를 찾아보자.
// 임시방편으로 Set() 대신 arr.incudes(i)를 넣으려고 했는데 이것도 실행되지 않는다.

function setZeroes(matrix: number[][]): void {
  //   console.log(matrix[0].indexOf(0));
  const checkRow: number[] = [];
  const checkCol: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        checkRow.push(i);
        checkCol.push(j);
      }
    }
  }

  for (let i = 0; i < checkRow.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[checkRow[i]][j] = 0;
    }
  }

  for (let i = 0; i < checkCol.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][checkCol[i]] = 0;
    }
  }

  //   console.log(checkRow);
  //   console.log(checkCol);
}

// test code

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

console.log(
  setZeroes([
    [0, 0, 0, 5],
    [4, 3, 1, 4],
    [0, 1, 1, 4],
    [1, 2, 1, 3],
    [0, 0, 1, 1],
  ])
);

// 0120 3452 1315
// 0000 0450 0310
