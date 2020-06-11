function getPrimes(a){
	for(let i =2; i<=a;i+=1){
		let counter = 0;
		for (let j =2;j<i;j+=1){
			if(i%j===0){
				counter+=1;
			}
		}
		if(counter===0){
			console.log(i);
		}
	}
}

getPrimes(10);