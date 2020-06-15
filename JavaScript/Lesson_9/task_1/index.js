const getAdults = users =>
	Object.entries(users).filter(user => user[1] >= 18).map(user => user[0]);


console.log(getAdults({'Tom': 18, 'Peter': 19, 'Alex': 17}));