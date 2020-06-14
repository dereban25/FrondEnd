const transformToObject = arr => {
	const obj = {};
	arr.forEach(elm => {
		obj[elm] = elm;
	})
	return obj;
};

console.log(transformToObject(['a', 17.1, 'Jonh Die']));