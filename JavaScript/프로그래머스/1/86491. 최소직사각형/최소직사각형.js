const solution = (sizes) => {
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
      continue;
    } else {
      const a = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = a;
    }
  }
  const width = sizes.map((item) => item[0]);
  const height = sizes.map((item) => item[1]);

  const maxWidth = Math.max(...width);
  const maxHeight = Math.max(...height);
  return maxWidth * maxHeight;
};
