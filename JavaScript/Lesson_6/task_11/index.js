function checker(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	if (Array.isArray(arr)) {
		let min = arr[0];
		for (let i = 0; i <= arr.length; i++) {
			if (min > arr[i]) {
				min = arr[i];
			}
		}
		let max = arr[0];
		for (let i = 0; i < arr.length; i++) {
			if (max < arr[i]) {
				max = arr[i];
			}
		}
		return (max+min)>1000?true:false;
	}
}
