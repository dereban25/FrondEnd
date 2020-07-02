function calculator(a, b) {
	switch(this.operation) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '/':
			return a / b;
		case '*':
			return a * b;
		default:
			return NaN;
	}
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
export const multiplier = calculator.bind({ operation: '*' });
console.log(multiplier(2, 3));

//const func = user.getFullName.bind(user);

// func();

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
export const summator = calculator.bind({ operation: '+' });
console.log(summator(2, 3));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
export const twice = calculator.bind({ operation: '*' }, (calculator.b = 2));
console.log(twice(3));