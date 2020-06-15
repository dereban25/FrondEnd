const addPropertyV1 = (userData, userId) => {
	userData.id = userId;
	return userData.id;
}
const addPropertyV2 = (userData, userId) => {
	const copy = { id: userId };
	userData = Object.assign(userData, copy);
	return userData;
}
const addPropertyV3 = (userData, userId) => {
	const copy = { id: userId };
	const newData = Object.assign({}, copy, userData);
	return newData;
}
const addPropertyV4 = (userData, userId) => {
	let objClone = {...userData };
	objClone.id = userId;
	return objClone;
}