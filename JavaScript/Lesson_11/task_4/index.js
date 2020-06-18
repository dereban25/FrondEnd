
const getMaxAbsoluteNumber = arr => {
	
	if (!Array.isArray(arr) || arr == 0)
		return null;
	
	const absolute = arr.map(elem => Math.abs(elem));
	
	return Math.max(...absolute);
};