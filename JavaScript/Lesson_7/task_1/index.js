const getSpecialNumbers = numbers =>
	numbers.filter(num=> num%3===0);
console.log(getSpecialNumbers([10,20,30,33,15]));