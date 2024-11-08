const solution = (todo_list, finished) => {
  const result = [];
  finished.forEach((item, index) => {
    !item && result.push(todo_list[index]);
  });
  return result;
};
