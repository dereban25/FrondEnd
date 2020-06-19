import { filterNames, arrAverage, transaction, user } from './filterNames.js'

//lesson 7 hw7
it('should be chosen right names with "ya"', () => {
	const result = filterNames(['John', 'Maks', 'Oleksandr','Tanya'], 'ya');
	
	expect(result).toEqual(['Olivya', 'Nastya']);
});

it('should return array elements with lenght > 5', () => {
	const result = filterNames(['John', 'Maks', 'Oleksandr', 'Emanuel'], '');
	
	expect(result).toEqual(['Olivya', 'Oleksandr', 'Emanuel']);
});

it('should return result typeof Array', () => {
	const result = filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], '');
	const typeResult = Array.isArray(result);
	expect(typeResult).toEqual(true);
});

//lesson 7 hw8
it('should return average of numbers in array', () => {
	const result = arrAverage([2, 5, 6, 11]);
	expect(result).toEqual(6);
});

it('should return null if argumentis not array', () => {
	const result = arrAverage(2, 5, 6, 11);
	expect(result).toEqual(null);
});

it('should return type of number ', () => {
	const result = typeof(arrAverage([2, 5, 6, 11]));
	expect(result).toEqual('number');
});


//lesson 8 hw1
it('should show property of currency', () => {
	const result = transaction.currency;
	expect(result).toEqual('USD');
});

it('should show country of agent', () => {
	const result = transaction.agent.country;
	expect(result).toEqual('Ukraine');
});

it('should show type of operation', () => {
	const result = transaction.operation;
	expect(result).toEqual('sale');
});

//lesson 8 hw2
it('should give new property about hobby to user', () => {
	const result = user.hobby;
	expect(result).toEqual('football');
});

it('should add new property about music to user', () => {
	const result = user['favourite music'];
	expect(result).toEqual('rock');
});

it('should add address property', () => {
	const result = user.address['bulding'];
	expect(result).toEqual('17');
});