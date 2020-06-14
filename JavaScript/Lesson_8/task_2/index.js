const concatProps = arr => {
	let obj = [];
	// eslint-disable-next-line guard-for-in
	for (let i in arr) {
		obj.push(arr[i]);
	}
	return obj;
};
const user = { name: 'Tom', ege: '22', value: '98%' };
console.log(concatProps(user));