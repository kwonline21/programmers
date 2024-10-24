const solution = (answers) => {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const check = [0, 0, 0];
  const result = [];
  for (let i = 0; i < answers.length; i++) {
    if (person1[i % 5] === answers[i]) {
      check[0]++;
    }
    if (person2[i % 8] === answers[i]) {
      check[1]++;
    }
    if (person3[i % 10] === answers[i]) {
      check[2]++;
    }
  }

  for (let j = 0; j < check.length; j++) {
    if (check[j] === Math.max(...check)) {
      result.push(j + 1);
    }
  }
  return result;
};
