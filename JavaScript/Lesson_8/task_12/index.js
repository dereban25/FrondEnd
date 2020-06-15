const getAdults = users => {
	let newObj = {};
	
	for (const i in users) {
		if (users[i] >= 18) {
			newObj[i] = users[i];
		}
	}
	return newObj;
};