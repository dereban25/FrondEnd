const tasks = [
	{ text: 'Buy milk', done: false,id:Math.random.toString() },
	{ text: 'Pick up Tom from airport', done: false ,id:Math.random.toString()},
	{ text: 'Visit party', done: false ,id:Math.random.toString()},
	{ text: 'Visit doctor', done: true ,id:Math.random.toString()},
	{ text: 'Buy meat', done: true,id:Math.random.toString() },
];


const addButton = document.querySelector('.create-task-btn');


const onCreateTask = () => {
	const addMessage = document.querySelector('.task-input');
	const text = addMessage.value;
	if (!text){
		return;
	}
	text.value = '';
	const test = {
		text,
		done:false,
		id: Math.random.toString(),
	};
	tasks.push(test);
	renderListItems(tasks);
};
addButton.addEventListener('click', onCreateTask);


const renderListItems = (listItems) => {
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
