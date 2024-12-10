const add = function (n1, n2) {
	return n1 + n2;
};

const subtract = function (n1, n2) {
	return n1 - n2;
};

const sum = function (arr) {
	return arr.reduce((current, value) => current + value, 0);
};

const multiply = function (arr) {
	return arr.reduce((product, value) => product * value);
};

const power = function (num, pow) {
	return num ** pow;
};

const factorial = function (num) {
	let product = 1;

	for (let i = num; i > 0; i--) {
		product *= i;
	}

	return product;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
