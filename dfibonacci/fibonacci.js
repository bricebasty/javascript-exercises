const fibonacci = function(number) {
  if (number < 1) {
    return "OOPS";
  } 
  else {
    let prev = 1, next = 0, total;
    for (let i = 0; i < number; i++) {
      total = prev + next;
      prev = next;
      next = total;
    }
    return total;
  }
}

module.exports = fibonacci
