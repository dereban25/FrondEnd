function buildObject(keyList, valueList) {
	return keyList.reduce((acc, key, value) => ({...acc, [key]: valueList[value]}), {});
}
const result = buildObject(['name', 'city', 'age'],['Max', 'Kiev', 36]);
console.log(result);