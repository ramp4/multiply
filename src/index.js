module.exports = function multiply(first, second) {
  first = first.split('').reverse();
  second = second.split('').reverse();
  let result = [];

  for (i = 0; first[i] >= 0; i++) {
    for (j = 0; second[j] >= 0; j++) {
      if (!result[i + j]) {
        result[i + j] = 0;
      }

      result[i + j] += first[i] * second[j];
    }
  }

  for (i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      }

      result[i + 1] += Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
    }
  }

  return result.reverse().join('');
};
