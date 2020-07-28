// function solution(clothes) {
//   const clothesMap = new Map();

//   for (let i = 0; i < clothes.length; i++) {
//     clothesMap.set(clothes[i][0], clothes[i][1]);
//   }

//   console.log([...clothesMap.values()]);
// }
function solution(clothes) {
  const map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    if (map.has(clothes[i][1])) {
      map.set(clothes[i][1], parseInt(map.get(clothes[i][1])) + 1);
    } else {
      map.set(clothes[i][1], 1);
    }
  }

  const arr = [...map.values()];

  if (arr.length === 1) {
    return arr[0];
  }

  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i] + 1;
  }
  return result - 1;
}

// test code

const clothes1 = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

const clothes2 = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];

const clothes3 = [[]];

console.log(solution(clothes1)); // output : 5
console.log(solution(clothes2)); // output : 3
console.log(solution(clothes3)); // output : 1
