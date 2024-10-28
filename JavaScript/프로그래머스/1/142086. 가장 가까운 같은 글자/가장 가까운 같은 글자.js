const solution = (s) => {
  const Arr = new Array(...s);
  const result = Arr.map((currentValue, currentIndex) => {
    const newArr = Arr.slice(0, currentIndex);
    for (let i = newArr.length - 1; i >= 0; i--) {
      if (newArr[i] === currentValue) {
        return currentIndex - i;
      }
    }
    return -1;
  });
  return result;
};