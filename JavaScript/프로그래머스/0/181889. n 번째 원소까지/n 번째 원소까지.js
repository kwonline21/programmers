const solution = (num_list, n) => {
  const result = [];
  num_list.forEach((item, index) => {
    index < n && result.push(item);
  });
  return result;
};
