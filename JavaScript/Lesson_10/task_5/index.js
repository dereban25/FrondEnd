const getTotalPrice = arr => {
	const sum = arr.reduce((acc, cur) => acc + cur);
	
	return '$' + Math.floor(sum * 100) / 100;
};