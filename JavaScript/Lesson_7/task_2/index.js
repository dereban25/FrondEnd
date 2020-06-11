const sortDesc = numbers=>
	numbers.slice().sort((a,b)=>b-a);

console.log(sortDesc([15,1,23,32]));