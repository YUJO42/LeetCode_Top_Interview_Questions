// a ~ z = 97 ~ 122
// A ~ Z = 65 ~ 90

function detectCapitalUse(word: string): boolean {
  let capitalCounter: number = 0;
  let smallCounter: number = 0;

  for (let i = 0; i < word.length; i++) {
    if (97 <= word[i].charCodeAt(0) && word[i].charCodeAt(0) <= 122) {
      smallCounter++;
    } else if (65 <= word[i].charCodeAt(0) && word[i].charCodeAt(0) <= 90) {
      capitalCounter++;
    }
  }

  if (smallCounter === word.length || capitalCounter === word.length) {
    return true;
  } else if (
    smallCounter === word.length - 1 &&
    65 <= word[0].charCodeAt(0) &&
    word[0].charCodeAt(0) <= 90
  ) {
    return true;
  }
  return false;
}
