const pickProps = (obj, arr) => {
	const newObj = {};
	arr.forEach(el =>{
		newObj[el] = obj[el];
	});
	
	return newObj;
};

console.log(pickProps({ a: 1, b: 2, c: 3 },['b','a']));