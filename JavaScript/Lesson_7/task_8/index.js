const cloneArr = (arr) => {
	if(!Array.isArray(arr)){
		return null;
	}
	return arr.map(el=>el);
}

console.log(cloneArr([10,20,30]));