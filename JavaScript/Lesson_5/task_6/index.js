function getPrimes(a){
	for(let i =2; i<=a;i++){
		let counter = 0;
		for (let j =2;j<i;j++){
			if(i%j===0){
				counter++;
			}else{
			
			}
		}
		if(counter===0){
			console.log(i);
		}else{
		
		}
	}
	
}

// getPrimes(10);