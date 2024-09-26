const solution = (food) => {
  const water = [0];
  for (let i = food.length - 1; i >= 0; i--) {
    if (food[i] % 2 === 0 && food[i] > 1) {
      for (let j = 0; j < food[i] / 2; j++) {
        water.push(i);
        water.unshift(i);
      }
    } else if (food[i] > 1) {
      for (let j = 1; j < food[i] / 2; j++) {
        water.push(i);
        water.unshift(i);
      }
    }
  }
  return water.toString().replaceAll(',', '');
};
