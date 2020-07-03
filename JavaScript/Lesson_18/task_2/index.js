const wallet = {
	transactions: [33, 23, 55, 77, 7, 1000, 25, 345],
	getMax() {
		return Math.max(...this.transactions);
	},
	getMin() {
		return Math.min(...this.transactions);
	},
};
export {wallet};