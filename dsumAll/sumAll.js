const sumAll = function (nb1, nb2) {
  let sum = nb1 + nb2;
  if (nb1 > 0 && nb2 > 0 && Number.isInteger(nb1) && Number.isInteger(nb2)) {
    for (let i = nb1 + 1; i < nb2 && nb1 < nb2; i += 1) {
      sum += i;
    }
    for (let i = nb2 + 1; i < nb1 && nb2 < nb1; i += 1) {
      sum += i;
    }
    return sum;
  }
  else {
    return 'ERROR';
  }
};

module.exports = sumAll;
