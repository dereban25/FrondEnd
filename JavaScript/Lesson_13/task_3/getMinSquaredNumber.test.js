import getMinSquaredNumber from "./getMinSquaredNumber";

it('should get squared min abs number', () => {
	const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
	
	expect(result).toEqual(4);
});

it('if we put an empty array', () => {
	const result = getMinSquaredNumber([]);
	
	expect(result).toEqual(null);
});

it('if we put a string', () => {
	const result = getMinSquaredNumber('hello');
	
	expect(result).toEqual(null);
});