function checkSum(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	let chSum = 0;
	for (let sum of arr) {
		chSum += sum;
	}
	return chSum > 100 ? true : false;
	
}

// console.log(checkSum([10,20,30]))