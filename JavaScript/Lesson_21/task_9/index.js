export function finishList() {
	const listElem = document.querySelector('.list');
	const listElem5 = document.querySelector('.special');
	
	const listItemElem1 = document.createElement('li');listItemElem1.textContent = '1';
	listElem.prepend(listItemElem1);
	
	const listItemElem4 = document.createElement('li');listItemElem4.textContent = '4';
	listElem5.before(listItemElem4);
	
	const listItemElem6 = document.createElement('li');listItemElem6.textContent = '6';
	listElem5.after(listItemElem6);
	
	const listItemElem8 = document.createElement('li');listItemElem8.textContent = '8';
	listElem.append(listItemElem8);
	
}
// finishList();