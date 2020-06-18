const calc = expression  => {
	const [a, operator, b] = expression.split(' ');
	console.log(a);
	let result;
	
	switch (operator) {
		case '+':
			result = Number(a) + +b;
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

console.log(calc('4 / 2'));