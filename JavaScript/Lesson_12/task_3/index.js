const cleanTransactionsList = arr => arr.filter(el => isFinite(el))
	.map(el => `$`+ parseFloat(el).toFixed(2));