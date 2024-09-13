const solution = (s) => {
  let trio = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.length - i === 2) break;
    for (let j = i + 1; j < s.length; j++) {
      for (let k = j + 1; k < s.length; k++) {
        if (s[i] + s[j] + s[k] === 0) {
          trio++;
        }
      }
    }
  }
  return trio;
};
