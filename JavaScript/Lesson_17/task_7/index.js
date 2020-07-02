const user = {
	firstName: 'John',
	lastName: "Doe",
	getFullName() {
		
		return `${this.firstName} ${this.lastName}`
	},
	setFullName(fullName) {
		
		const arr = fullName.split(' ');
		// eslint-disable-next-line prefer-destructuring
		this.firstName = arr[0];
		// eslint-disable-next-line prefer-destructuring
		this.lastName = arr[1];
	},
};


export { user };