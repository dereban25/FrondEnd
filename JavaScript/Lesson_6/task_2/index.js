let sumOfNumbers = 0;

function getSum(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	for (let i = 0; i < arr.length; i++) {
		sumOfNumbers += arr[i];
	}
	return sumOfNumbers;
}
// console.log(getSum([10,10,20]));