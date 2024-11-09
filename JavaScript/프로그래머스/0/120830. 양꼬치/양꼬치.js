const solution = (n, k) => {
  let service = 0;
  let payment = n * 12000;
  while (n > 9) {
    n -= 10;
    service++;
  }
  payment += (k - service) * 2000;
  return payment;
};
