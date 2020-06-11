const m = 10;
const n = 45;
let result = 0;
// eslint-disable-next-line no-plusplus
for (let i = m; i <= n; i++) {
	if ((i % 2 === 0) && (i % 4 !== 0)) {
		if (i % 5 === 0) {
			console.log(i)
		} else {
			result += i;
		}
	} else if (i % 3 === 0) {
		if (i % 5 === 0) {
			console.log(i)
		} else {
			result -= i;
		}
	} else if (i % 4 === 0) {
		if (i % 5 === 0) {
			console.log(i)
		} else {
			result *= i;
		}
	} else if (i % 5 === 0) {
		console.log(i)
	} else {
		continue;
	}
}