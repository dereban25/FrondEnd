function uniqueCount(array) {
	if (!Array.isArray(array)) {
		return null;
	}
	let arrDuplicates = [];
	for (let i = 0; i < array.length; i++) {
		arrDuplicates.push(array[i]);
		for (let j=i+1; j < array.length; j++) {
			if(array[j]===array[i]){
				arrDuplicates.pop(array[j]);
			}
		}
	}
	return arrDuplicates.length;
}
// console.log(uniqueCount([10,20,30,1,45,5,45,10,30,10,20]));
