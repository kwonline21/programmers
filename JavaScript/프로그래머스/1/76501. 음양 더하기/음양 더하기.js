const solution = (absolutes, signs) => {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      absolutes[i] *= -1;
    }
  }
  absolutes.forEach((item) => {
    answer += item;
  });
  return answer;
};
