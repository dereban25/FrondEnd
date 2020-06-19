export default arr => {
	if (!Array.isArray(arr) || arr.length === 0) return null;
	
	const absValues = arr.map(num => Math.abs(num));
	
	return Math.min(...absValues)**2;
	
}