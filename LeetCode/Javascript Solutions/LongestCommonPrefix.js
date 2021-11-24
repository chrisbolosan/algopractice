const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let min = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < min.length) {
      min = strs[i];
    }
  }
  for (let i = 0; i < min.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== min[i]) {
        return min.substring(0, i);
      }
    }
  }
  return min;
};
