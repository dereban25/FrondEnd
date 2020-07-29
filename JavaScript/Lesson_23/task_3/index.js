const tasks = [
	{ text: 'Buy milk', done: false },
	{ text: 'Pick up Tom from airport', done: false },
	{ text: 'Visit party', done: false },
	{ text: 'Visit doctor', done: true },
	{ text: 'Buy meat', done: true },
];


let addMessage = document.querySelector('.task-input');
let addButton = document.querySelector('.create-task-btn');
let todoList = [];

addButton.addEventListener('click', function() {
	todoList.push(tasks);
	renderListItems(todoList);
});


const renderListItems = listItems => {
	const listElem = document.querySelector('.list');
	
	const listItemsElems = listItems
		.sort((a, b) => a.done - b.done)
		.map(({ text, done }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			const checkboxElem = document.createElement('input');
			checkboxElem.setAttribute('type', 'checkbox');
			checkboxElem.checked = done;
			checkboxElem.classList.add('list__item-checkbox');
			
			listItemElem.append(checkboxElem, text);
			
			return listItemElem;
		});
	listElem.append(...listItemsElems);
};
renderListItems(tasks);
