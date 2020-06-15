const getCustomersList = obj =>
	Object.entries(obj).map(([id, secondEl]) => ({id, ...secondEl})).sort((a,b) => a.age - b.age);