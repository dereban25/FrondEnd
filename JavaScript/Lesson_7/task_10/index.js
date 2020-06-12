const sum = (arr) => {
	if(!Array.isArray(arr)){
		return null;
	}
	return arr.reduce((acc,cur)=> acc + cur);
}

console.log(sum([10,20]));