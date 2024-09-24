const solution = (array, commands) => {
  const result = [];
  for (let i = 0; i < commands.length; i++) {
    const newArray = array.slice(commands[i][0] - 1, commands[i][1]);
    newArray.sort(function (a, b) {
      return a - b;
    });
    result.push(newArray[commands[i][2] - 1]);
  }
  return result;
};