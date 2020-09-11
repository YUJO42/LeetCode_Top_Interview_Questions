/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */

// @@ FAIL @@

// var fractionToDecimal = function (numerator, denominator) {
//   const result = numerator / denominator;

//   if (result.toString().split('').length > 1) {
//     if (result.toString().split('').length > 5) {
//       const division = parseInt(result);
//       const rest = [];
//       const resultArr = result.toString().split('');
//       for (let i = 2; i <= resultArr.length; i++) {
//         if (resultArr[i - 1] === resultArr[i]) break;
//         rest.push(resultArr[i]);
//       }

//       console.log('result', rest);
//       return `${division}.(${rest})`;
//     }
//     return result.toFixed(1).toString();
//   }
//   return result.toString();
// };

// @@ FAIL @@

// var fractionToDecimal = function (numerator, denominator) {
//   const result = numerator / denominator;

//   if (result.toString().split('').length > 1) {
//     if (result.toString().split('').length > 3) {
//       const division = parseInt(result);
//       const rest = new Set();
//       const resultArr = result.toString().split('');

//       for (let i = 2; i < resultArr.length; i++) {
//         if (resultArr[i - 1] === resultArr[i]) break;
//         rest.add(resultArr[i]);
//       }

//       console.log('result', rest);
//       const newRest = [...rest].join('');
//       return `${division}.(${newRest})`;
//     }
//     return result.toFixed(1).toString();
//   }
//   return result.toString();
// };

var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return '0';

  const isNegative = numerator < 0 ? denominator > 0 : denominator < 0;
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  const leftSide = Math.floor(numerator / denominator);
  const hasDecimal = (numerator / denominator) % 1 !== 0;
  if (!hasDecimal) {
    return isNegative ? `-${leftSide.toString()}` : leftSide.toString();
  }

  const result = [leftSide.toString(), '.'];
  addDecimal(numerator, denominator, leftSide, result);

  if (isNegative) {
    result.unshift('-');
  }

  return result.join('');
};

function addDecimal(numerator, denominator, leftSide, result) {
  numerator -= leftSide * denominator;

  let idx = 0;
  const carries = {};

  while (numerator !== 0 && !(numerator in carries)) {
    carries[numerator] = idx++;
    numerator *= 10;
    const nextDigit = Math.floor(numerator / denominator);
    result.push(nextDigit.toString());
    numerator %= denominator;
  }

  if (numerator in carries) {
    addParens(carries[numerator], result);
  }
}

function addParens(decimalIdx, result) {
  result.splice(2 + decimalIdx, 0, '(');
  result.push(')');
}

// test code

// console.log(fractionToDecimal(1, 2)); // 0.5
// console.log(fractionToDecimal(2, 1)); // 2
// console.log(fractionToDecimal(2, 3)); // 0.(6)
// console.log(fractionToDecimal(4, 333)); // 0.(012)
// console.log(1 in [1, 2, 3]);
console.log(fractionToDecimal(1, 6)); // 0.1(6)
