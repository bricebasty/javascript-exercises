const removeFromArray = function (...array) {
  return array[0].splice(2, 1);
};

module.exports = removeFromArray;
