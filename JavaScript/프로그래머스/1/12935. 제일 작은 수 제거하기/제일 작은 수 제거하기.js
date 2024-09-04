const solution = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr.length === 1) {
      return [-1];
    }
  }
  for (let j = 0; j < arr.length; j++)
    if (arr[j] === min) {
      arr.splice(j, 1);
      break;
    }
  return arr;
};
