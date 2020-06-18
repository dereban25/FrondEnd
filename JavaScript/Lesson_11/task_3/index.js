const splitString = (string, len = 10) => {
	if (typeof string !== 'string')
		return null;
	
	const strArr = [];
	let start = 0;
	
	while (true) {
		let chunk = string.substr(start, len);
		
		if (chunk.length === 0)
			break;
	
		if (chunk.length < len)
			chunk += '.'.repeat(len - chunk.length)
		
		strArr.push(chunk);
		start += len;
	}
	
	return strArr;
};