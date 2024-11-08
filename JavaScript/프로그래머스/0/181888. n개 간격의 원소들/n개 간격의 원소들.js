const solution = (num_list, n) => {
  const result = [];
  num_list.forEach((item, index) => {
    index % n === 0 && result.push(item);
  });
  return result;
};
