const superRound = (number, rounding) => {
	let numRound = Math.pow(10, rounding);
	
	return [
		Math.floor(number * numRound) / numRound,
		Math.round(number * numRound) / numRound,
		Math.ceil(number * numRound) / numRound,
		Math.trunc(number * numRound) / numRound,
		Number(number.toFixed(rounding))
	
	];
};