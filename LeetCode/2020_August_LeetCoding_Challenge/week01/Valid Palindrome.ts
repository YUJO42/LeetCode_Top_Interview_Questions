function isPalindrome(s: string): boolean {
  const filter = s
    .toLowerCase()
    .split("")
    .filter((char) => {
      let charCode = char.charCodeAt(0);
      return (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 97 && charCode <= 122)
      );
    });

  return filter.join("") === filter.reverse().join("");
}
// test code

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
