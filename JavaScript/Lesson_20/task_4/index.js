class Order {
	
	constructor(price, city, type) {
		this.id = Math.ceil(Math.random(0, this.id + 1)).toString();
		this.price = price;
		this.city = city;
		this.type = type;
		this.dateCreated = new Date;
		this.dateConfirmed;
		this.isConfirmed = false;
	}
	
	checkPrice() {
		return this.price > 1000;
	};
	
	confirmOrder() {
		this.isConfirmed = true;
		this.dateConfirmed = new Date;
	};
	
	isValidType() {
		return this.type === 'Buy' || this.type === 'Sell';
	}
	
};

export { Order };