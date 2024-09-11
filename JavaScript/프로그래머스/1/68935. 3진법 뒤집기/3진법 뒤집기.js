const solution = (n) => {
  let ternary = [];
  while (n !== 0) {
    ternary.push(n % 3);
    n = Math.floor(n / 3);
  }
  decimal = 0;
  for (let i = ternary.length - 1, j = 0; i >= 0; i--, j++) {
    decimal += ternary[i] * 3 ** j;
  }
  return decimal;
};