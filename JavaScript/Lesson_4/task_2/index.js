const m = 15;
const n = 20;
let i = m;
let result = 1;
while(i<=n){
	if (i%2===1){
		result *= i;
	}
	i+=1;
}
console.log("Result: ",result)