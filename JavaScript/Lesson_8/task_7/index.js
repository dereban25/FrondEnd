const addPropertyV1 = (userData, userId) => {
	userData.id = userId;
	
	return userData
};

const addPropertyV2 = (userData, userId) => {
	userData.id = userId
	const copyObj = Object.assign({}, userData);
	
	return copyObj;
};

const addPropertyV3 = (userData, userId) => {
	const objCopy = Object.assign({}, userData);
	objCopy.id = userId;
	
	return objCopy;
};

const addPropertyV4 = (userData, userId) => {
	const objCopy = {...userData };
	objCopy.id = userId;
	
	return objCopy;
};