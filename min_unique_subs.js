function minUniqueSubstrings(s) {
  let seen = new Set();
  let count = 0;

  for (let ch of s) {
    if (seen.has(ch)) {
      count++;
      seen.clear();
    }
    seen.add(ch);
    console.log(count, seen)

  }

  if (seen.size > 0) {
    count++;
  }

  return count;
}

const s = "abacaba";
console.log(minUniqueSubstrings(s)); 