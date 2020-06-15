const getAdults = users => {
	let newObj = {};
	
	for (const i in users) {
		if (users[i] >= 18) {
			newObj[i] = users[i];
		}
	}
	return newObj;
};

console.log(getAdults({'Bob':18,'Ted':20,'David':17}));