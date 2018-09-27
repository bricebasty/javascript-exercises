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
	for (let i = 0; i <= a + 1; i++) {
		factor = a * ( a - 1 );
		a--;
	}
	return factor;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}