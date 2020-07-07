export const getItemsList = body => {
	const elementsList = document.querySelectorAll('.technology');
	console.dir(elementsList);
	return elementsList;
};

getItemsList();

export const getItemsArray = body => {
	const elementsArray = Array.from(document.querySelectorAll('.tool'));
	console.dir(elementsArray);
	return elementsArray;
}

getItemsArray();