const flatArray = arr =>
	arr.reduce((acc, element) =>
			acc.concat(element), []);

console.log(flatArray([[10,20,30],30,20,[25,34]]));