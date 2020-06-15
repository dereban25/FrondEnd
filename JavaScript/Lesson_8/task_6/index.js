function addPropertyV1(obj, key, value) {
	obj[key] = value;
	return obj;
}

function addPropertyV2(obj, key, value) {
	Object.assign(obj, {[key]: value});
	return obj;
}

function addPropertyV3(obj, key, value) {
	let copy = Object.assign({}, obj, {[key]: value});
	return copy;
}

function addPropertyV4(obj, key, value) {
	let copyObj = {...obj, [key]: value};
	return copyObj;
}

