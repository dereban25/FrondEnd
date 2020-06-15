function addPropertyV1(obj, key, value) {
	// eslint-disable-next-line no-param-reassign
	obj.key = value;
	return obj;
}

function addPropertyV2(obj, key, value) {
	Object.assign(obj, {[key]: value});
	return obj;
}

function addPropertyV3(obj, key, value) {
	const newObj = Object.assign(obj, {[key]: value});
	return newObj;
	
}

function addPropertyV4(obj, key, value) {
	let copyObj = {...obj, [key]: value};
	return copyObj;
}

