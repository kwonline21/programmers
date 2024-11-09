const solution = (n, k) => {
  let payment = n * 12000 + (k - Math.floor(n / 10)) * 2000;
  return payment;
};
