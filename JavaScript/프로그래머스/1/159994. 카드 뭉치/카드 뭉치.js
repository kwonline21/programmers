const solution = (cards1, cards2, goal) => {
  const checkGoal = [];
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.splice(0, 1);
      checkGoal.push(1);
      continue;
    }
    if (goal[i] === cards2[0]) {
      cards2.splice(0, 1);
      checkGoal.push(1);
      continue;
    }
  }
  return checkGoal.length === goal.length ? 'Yes' : 'No';
};
