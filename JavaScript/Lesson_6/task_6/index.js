function squareArray(arr){
	let arrInSquare= [];
	if (!Array.isArray(arr)){
		return null;
	}
	for(let i=0;i<arr.length;i++){
		arrInSquare.push(Math.pow(arr[i],2));
	}
	return arrInSquare;
}

