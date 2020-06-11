function sortAsc(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	array.sort(function (a, b) {return a - b});
	return array;
}

function sortDesc(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	array.sort(function (a, b) {return b - a});
	return array;
}
//
// console.log(sortAsc([10,25,3,4,56]));
// console.log(sortDesc([10,25,3,4,56]));