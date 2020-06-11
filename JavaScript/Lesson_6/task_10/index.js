function cloneArr(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	if (Array.isArray(arr)) {
		let new_arr = [];
		for (let i = 0; i <= arr.length - 1; i++) {
			new_arr.push(arr[i]);
		}
		return new_arr;
	}
}
