const solution = (array, height) => {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (height < array[i]) {
      count++;
    }
  }
  return count;
};