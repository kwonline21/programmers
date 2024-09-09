const solution = (s) => {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (String(s[i] - 0) === "NaN") {
        return false;
      }
    }
  } else return false;
  return true;
};