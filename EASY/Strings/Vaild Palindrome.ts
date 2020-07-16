function isPalindrome(s: string): boolean {
  let filtered = s
    .toLowerCase()
    .split("")
    .filter((char) => {
      let charCode = char.charCodeAt(0);
      return (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 97 && charCode <= 122)
      );
    });
  return filtered.join("") === filtered.reverse().join("");
}
