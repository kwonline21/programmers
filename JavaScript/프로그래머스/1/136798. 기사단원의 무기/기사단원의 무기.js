const solution = (number, limit, power) => {
  const knights = [];
  for (let i = 1; i < number + 1; i++) {
    knights.push(i);
  }

  const weapons = knights.map((knight) => {
    let count = 0;
    const squareRootFloor = Math.floor(Math.sqrt(knight));
    for (let j = 1; j <= squareRootFloor; j++) {
      if (knight % j === 0) {
        j * j === knight ? (count += 1) : (count += 2);
      }
    }
    return count > limit ? power : count;
  });

  let iron = 0;
  weapons.forEach((weapon) => {
    iron += weapon;
  });

  return iron;
};
