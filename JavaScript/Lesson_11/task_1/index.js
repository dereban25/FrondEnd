const splitText = (text, num) => {
	if (typeof text !== "string")
		return null;
	
	const strArr = [];
	let startText = 0;
	
	while (true) {
		const chunk = text.substr(startText, num);
		if (chunk.length === 0) {
			break;
		}
		strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
		startText += num;
	}
	return strArr.join('\n');
};

console.log(splitText('Peter was bad man', 4));