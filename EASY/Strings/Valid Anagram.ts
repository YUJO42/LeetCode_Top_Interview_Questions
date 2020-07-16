function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const a: string[] = s.split("").sort();
  const b: string[] = t.split("").sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

// test code

console.log(isAnagram("anagram", "nagaram"));
