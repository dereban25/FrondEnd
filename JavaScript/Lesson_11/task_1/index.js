const splitText = (text, len = 10) => {
	
	if (typeof text != 'string')
		return null;
	
	const strArr = [];
	let start = 0;
	
	while (true) {
		let chunk = text.substr(start, len);
		if (chunk.length === 0)
			break;
		
		strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
		start += len;
	}
	
	
	return strArr.join('\n');
};

// console.log(splitText('Peter was bad man', 4));