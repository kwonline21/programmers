const solution = (a, b) => {
  let leastCommonMultiple = 1;
  while (true) {
    if (leastCommonMultiple % a === 0 && leastCommonMultiple % b === 0) {
      break;
    }
    leastCommonMultiple++;
  }

  let greatestCommonFactor = Math.floor(a, b);
  while (true) {
    if (a % greatestCommonFactor === 0 && b % greatestCommonFactor === 0) {
      break;
    }
    greatestCommonFactor--;
  }

  return [greatestCommonFactor, leastCommonMultiple];
};
