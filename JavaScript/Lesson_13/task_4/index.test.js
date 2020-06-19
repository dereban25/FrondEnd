import { calc } from './calculator.js';

it('should  work correctly with operator "+"', () => {
	const result = calc('5 + 5');
	
	expect(result).toEqual('5 + 5 = 10');
});

it('should work correctly with operator "-"', () => {
	const result = calc('10 - 5');
	
	expect(result).toEqual('10 - 5 = 5');
});

it('should work correctly with operator "*"', () => {
	const result = calc('5 * 5');
	
	expect(result).toEqual('5 * 5 = 25');
});

it('should work correctly with operator "/"', () => {
	const result = calc('10 / 5');
	
	expect(result).toEqual('10 / 5 = 2');
});
it('should get null', () => {
	const result = calc(5);
	
	expect(result).toEqual(null);
});