const convertToCelsius = (fahrenheit) => {
	let celcius = ((fahrenheit - 32) * 5) / 9;

	return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = (celcius) => {
	let fahrenheit = (9 / 5) * celcius + 32;

	return parseFloat(fahrenheit.toFixed(1));
};

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
