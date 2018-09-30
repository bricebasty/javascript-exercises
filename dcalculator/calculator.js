function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
  return array.reduce((total, currentValue) => total += currentValue, 0);
}

function multiply (array) {
	return array.reduce((total, currentValue) => total *= currentValue);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let factor;

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}