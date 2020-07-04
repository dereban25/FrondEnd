export const vehicle = {
	name:"Argo",
	move() {
	console.log(`${this.name} is moving`);
	},
stop(){
		console.log(`${this.name} stopped`);
}
};
export const ship = {
	__proto__: vehicle,
	startMachine(){
		console.log(`${this.name} lifting anchor up`);
		ship.move();
	},
	stopMachine(){
		ship.stop();
		console.log(`${this.name} lifting anchor down`);
	}
};

// eslint-disable-next-line no-unused-expressions
ship.move()
ship.startMachine()
ship.stopMachine()