const solution = (s, n) => {
  const toArr = s.split('');
  const UTF_Dec = toArr.map((item) => {
    if (item === ' ') {
      return 32;
    }
    const newItem = item.charCodeAt(0) + n;
    if (newItem > 90 && item.charCodeAt(0) < 91) {
      return 64 + (newItem - 90);
    } else if (newItem > 122 && item.charCodeAt(0) > 96) {
      return 96 + (newItem - 122);
    }
    return newItem;
  });
  const UTF_Char = UTF_Dec.map((item) => {
    return String.fromCharCode(item);
  });
  const result = UTF_Char.join('');
  return result;
};
