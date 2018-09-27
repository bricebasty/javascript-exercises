function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
  let thesum;
	array.forEach((element, index) => {
		thesum += element;
	});
	return thesum;
}

function multiply (array) {
	
}

function power(a, b) {
	
}

function factorial(a) {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}