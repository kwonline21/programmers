const solution = (phone_number) => {
  let arr = Array(...phone_number);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i <= arr.length - 5) {
      arr[i] = "*";
    }
  }
  return arr.toString().replace(/,/g, "");
};