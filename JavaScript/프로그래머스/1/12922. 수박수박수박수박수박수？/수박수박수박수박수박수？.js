const solution = (n) => {
  let watermelon = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      watermelon[i] = "수";
    } else {
      watermelon[i] = "박";
    }
  }
  return watermelon.toString().replace(/,/g, "");
};
