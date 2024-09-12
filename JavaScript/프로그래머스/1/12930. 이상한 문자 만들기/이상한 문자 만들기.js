const solution = (s) => {
  const arr = s.split(' ');
  let newArray = [];
  let newString = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        newString += arr[i][j].toUpperCase();
      } else {
        newString += arr[i][j].toLowerCase();
      }
    }
    if (i !== arr.length - 1) {
      newString += ' ';
    }
  }
  return newString;
};