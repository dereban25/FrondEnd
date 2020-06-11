function withdraw(clients,balances,client,amount) {
 for (let i = 0; i < clients.length; i++){
 	if (clients[i] === client){
 		if(amount > balances[i]){
 			return -1;
		}
 		balances[i]-=amount;
 		return balances[i];
	}
 }
}

// console.log(withdraw(["Max","Peter","Nata"],[200,300,125],"Peter",350));