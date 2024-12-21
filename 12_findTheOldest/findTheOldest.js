const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

function calculateAge(person) {
	person.yearOfDeath ??= new Date().getFullYear();

	return person.yearOfDeath - person.yearOfBirth;
}

// Function to find the oldest person in an array of people
function findTheOldest(people) {
	const oldestToYoungest = people.toSorted(
		(person, nextPerson) => calculateAge(nextPerson) - calculateAge(person)
	);

	// Getting the first Element
	const oldestPerson = oldestToYoungest[0];
	return oldestPerson;
}

const oldest = findTheOldest(people);
console.log("Oldest person:", oldest);

// Do not edit below this line
module.exports = findTheOldest;
