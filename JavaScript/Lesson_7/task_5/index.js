const squareArray = array => {
	if (!Array.isArray(array)) {
		return null;
	}
	return array.map(el => el * el);
}

console.log(squareArray([1,2,3]));