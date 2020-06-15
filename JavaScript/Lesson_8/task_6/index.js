function addPropertyV1(userData, userId){
	userData.id = userId;
	return userData;
}

function addPropertyV2(userData, userId){
	Object.assign(userData, {id: userId});
	return userData;
}

function addPropertyV3(userData, userId){
	return Object.assign({id: userId}, userData,);
}

function addPropertyV4(userData, userId){
	return {id: userId, ...userData};
}