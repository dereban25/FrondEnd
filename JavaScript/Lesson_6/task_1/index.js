function getArrayBounds(arr){
	if(!Array.isArray(arr)){
		return null;
	}
	console.log([arr.length,arr[0],arr[arr.length-1]]);

}

// getArrayBounds([10,25,24,5]);