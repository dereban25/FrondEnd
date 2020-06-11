function increaseEvenEI(arr,delta) {
	if (!Array.isArray(arr)) {
		return null;
	}
	let newArray = [];
	for (let i of arr){
		if (i %2 === 0)
			newArray.push(i+=delta);
		else newArray.push(i);
	}
	return newArray;
}

// console.log(increaseEvenEI([10,21,30],10));