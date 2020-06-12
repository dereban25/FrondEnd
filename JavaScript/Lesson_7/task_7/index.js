const increaseEvenEI = (arr,delta) => {
	if(!Array.isArray(arr)){
		return null;
	}
	return arr.map(el=>el+delta);
}

console.log(increaseEvenEI([10,20,30,34],25));