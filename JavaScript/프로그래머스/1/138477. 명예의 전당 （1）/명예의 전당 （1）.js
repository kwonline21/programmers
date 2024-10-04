const solution = (k, score) => {
  const result = [];
  let hallOfFame = [];
  for (let i = 0; i < score.length; i++) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a);
    hallOfFame = hallOfFame.slice(0, k);
    result.push(Math.min(...hallOfFame));
  }
  return result;
};
