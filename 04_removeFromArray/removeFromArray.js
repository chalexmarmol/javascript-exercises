const removeFromArray = (array, ...value) => {
	return array.filter((element) => !value.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
