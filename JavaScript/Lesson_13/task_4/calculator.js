export const calc = expression => {
	if (typeof expression !== 'string') {
		return null;
	}
	
	// eslint-disable-next-line prefer-const
	let [a, operation, b] = expression.split(' ');
	let result;
	a = +a;
	b = +b;
	
	// eslint-disable-next-line default-case
	switch (operation) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/':
			result = a / b;
			break;
	}
	
	return `${expression} = ${result}`;
};