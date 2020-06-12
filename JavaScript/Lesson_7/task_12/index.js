const arrAverage = (arr) => {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.reduce((acc, el) => (acc + el)) / arr.length;
}

console.log(arrAverage([10,20,23,13]));