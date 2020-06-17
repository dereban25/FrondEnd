const getRandomNumbers = (length, start, end) => {
	if (Math.floor(start) >= Math.floor(end))
		return null;
	return Array(length).fill().map(num =>
		Math.floor(Math.random() * (start - end + 1) + end));
};

console.log(getRandomNumbers(4, 2, 5));

console.log(Math.floor(Math.random() *(2-5+1))+5);