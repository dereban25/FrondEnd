export const getOwnProps = (obj) => {
	const arr = [];
	
	// eslint-disable-next-line no-restricted-syntax
	for (const a in obj) {
		
		if (obj.hasOwnProperty(a) && typeof obj[a] !== 'function') {
			arr.push(a);
		}
	}
	return arr;
}