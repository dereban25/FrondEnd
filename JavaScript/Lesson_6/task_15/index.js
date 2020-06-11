function includes(arr,n) {
	for (let i = 0; i < arr.length;i++){
		if (arr[i]===n){
			return true;
		}
	}
	return false;
}

// console.log(includes([10,20,30],10));