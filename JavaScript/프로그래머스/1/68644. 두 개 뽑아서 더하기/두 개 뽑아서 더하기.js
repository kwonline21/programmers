const solution = (numbers) => {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) break;
    for (let j = i; j < numbers.length; j++) {
      if (j === numbers.length - 1) break;
      arr.push(numbers[i] + numbers[j + 1]);
    }
  }
  const set = new Set(arr);
  return [...set].sort((a, b) => a - b);
};
