function withdraw(clients, balances, client, amount) {
	
	let clientId = clients.findIndex(elem => (elem === client));
	
	// eslint-disable-next-line no-return-assign
	return balances[clientId] = amount > balances[clientId] ?
		-1 : balances[clientId] - amount;
};

console.log(withdraw(['Ann','Jones'],[1000,2000],'Jones',1000));