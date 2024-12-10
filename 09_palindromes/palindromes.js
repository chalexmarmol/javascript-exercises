const palindromes = (str) => {
	let alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';

	const cleanedString = str
		.toLowerCase()
		.split('')
		.filter((character) => alphanumerical.includes(character))
		.join('');

	const reverseString = cleanedString.split('').reverse().join('');
	return cleanedString === reverseString;
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
