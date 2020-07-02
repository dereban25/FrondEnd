function bind(func, context) {
	// eslint-disable-next-line prefer-rest-params
	const bindArgs = [].slice.call(arguments, 2);
	
	return function() {
		// eslint-disable-next-line prefer-rest-params
		const funcArgs = [].slice.call(arguments)
		return func.apply(context, bindArgs.concat(funcArgs));
	};
};

export { bind };