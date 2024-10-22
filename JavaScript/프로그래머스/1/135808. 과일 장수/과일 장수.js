const solution = (k, m, score) => {
  const remainder = score.length % m;
  const newScore = score.sort((a, b) => a - b).slice(remainder);

  let result = 0;

  for (let i = 0; i < newScore.length; i++) {
    if (i % m === 0) {
      result += newScore[i] * m;
    }
  }

  return result;
};