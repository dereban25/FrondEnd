const reverseArray = (array) => {
	if (!Array.isArray(array)) {
		return null;
	}
	return array.slice().reverse();
}

console.log(reverseArray([1,2,3,45]));