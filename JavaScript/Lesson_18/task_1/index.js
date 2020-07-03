export const event = {
	guests: [
		{name: 'Tom', email: 'a@gmail.com', age: 17},
		{name: 'Bob', email: 'b@gmail.com', age: 18},
	],
	message: 'Welcome to the party!',
	getInvitations() {
		return this.guests.filter(({age}) => age >= 18).map(({email, name}) => ({
			email: email,
			message: `Dear ${name}! ${this.message}`,
		}));
	}
}

console.log(event.getInvitations());