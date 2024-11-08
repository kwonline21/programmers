const solution = (names) => {
  const result = [];
  names.forEach((item, index) => {
    index % 5 === 0 && result.push(names[index]);
  });
  return result;
};
