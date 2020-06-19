//lesson 7 hw7
export function filterNames(arr, text) {
	let elementMoreFive = arr.filter(elem => elem.length > 5 && elem.includes(text));
	return elementMoreFive;
}
// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], ));

//lesson 7 hw8

export function arrAverage(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	let averageElem = arr.reduce((acc, num) => {
		return (acc + num);
	});
	return averageElem / arr.length;
}
//console.log(arrAverage([2, 5, 6, 11]));

//lesson 8 hw1

export const transaction = {
	currency: 'USD',
	value: 170,
	operation: 'sale',
	agent: {
		country: 'Ukraine',
		company: 'NYSE'
	},
	'operation time': 1584029990001
};

//lesson 8 hw2

export const user = {
	name: 'Tom',
	age: 17,
};

user.hobby = 'football';
const anotherKey = 'married';
user[anotherKey] = false;
user['favourite music'] = 'rock';
user['address'] = {};
user.address['country'] = 'Ukraine';
user.address['bulding'] = '17';
console.log(user);