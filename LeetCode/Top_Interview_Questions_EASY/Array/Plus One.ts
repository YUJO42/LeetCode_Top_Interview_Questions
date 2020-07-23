// try1 : fail
// fail input : [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// number로 변환해서 더한 후 배열로 변환하는데 number 최대값을 넘어가는 듯

// function plusOne(digits: number[]): number[] {
//   const num = parseInt(digits.join("")) + 1;
//   const arr = num.toString();
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(parseInt(arr[i]));
//   }
//   return result;
// }

function plusOne(digits: number[]): number[] {
  let length: number = digits.length;
  let carry = 1;
  for (let i = length - 1; i >= 0; i--) {
    let temp: number = digits[i] + carry;
    carry = 0;
    if (temp > 9) {
      temp -= 10;
      carry = 1;
    }
    digits[i] = temp;
  }

  return carry ? [1, ...digits] : digits;
}

// test code

console.log(plusOne([1, 2, 3])); // output : [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // output : [4, 3, 2, 2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// output : [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne([9]));
