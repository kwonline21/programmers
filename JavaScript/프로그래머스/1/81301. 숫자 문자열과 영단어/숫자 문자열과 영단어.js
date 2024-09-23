const solution = (s) => {
  let newS = s.replaceAll('zero', '0');
  newS = newS.replaceAll('one', '1');
  newS = newS.replaceAll('two', '2');
  newS = newS.replaceAll('three', '3');
  newS = newS.replaceAll('four', '4');
  newS = newS.replaceAll('five', '5');
  newS = newS.replaceAll('six', '6');
  newS = newS.replaceAll('seven', '7');
  newS = newS.replaceAll('eight', '8');
  newS = newS.replaceAll('nine', '9');
  return +newS;
};
