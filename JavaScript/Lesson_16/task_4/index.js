var foo = 1;

function bar() {
	if (!foo) {
		let foo = 10;
	}
	
	return foo;
}
// console.log(bar());
var foo = bar();

// console.log(foo);
export default foo;