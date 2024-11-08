const solution = (num_list, n) => {
  const previous = num_list.slice(0, n);
  const later = num_list.slice(n, num_list.length);
  return later.concat(previous);
};
