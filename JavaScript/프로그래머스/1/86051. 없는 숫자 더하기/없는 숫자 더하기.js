const solution = (numbers) => {
  const set = new Set(numbers);
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (set.has(i)) {
      continue;
    } else {
      answer += i;
    }
  }
  return answer;
};
