function compareObjects(obj1, obj2) {
	const arr1 = Object.values(obj1).sort().toString();
	const arr2 = Object.values(obj2).sort().toString();
	const arr3 = Object.keys(obj1).sort().toString();
	const arr4 = Object.keys(obj2).sort().toString();
	if (arr1 === arr2 && arr3 === arr4) {
		return true;
	}
	return false;
}