const tasks = [
	{text: 'Buy milk', done: false},
	{text: 'Pick up Tom from airport'},
	{text: 'Visit party', done: false},
	{text: 'Visit doctor', done: true},
	{text: 'Buy meat', done: true},
];


const addButton = document.querySelector('.create-task-btn');

const renderListItems = (listItems) => {
	const listElem = document.querySelector('.list');
	
	
	const listItemsElems = listItems
		.sort((a, b) => a.done - b.done)
		.map(({text, done}) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			const checkboxElem = document.createElement('input');
			checkboxElem.setAttribute('type', 'checkbox');
			checkboxElem.checked = done;
			// checkboxElem.id = Math.random.id.toString();
			checkboxElem.classList.add('list__item-checkbox');
			
			listItemElem.append(checkboxElem, text);
			
			return listItemElem;
		});
	listElem.append(...listItemsElems);
	const onCreateTask = () => {
		const addMessage = document.querySelector('.task-input');
		const text = addMessage.value;
		if (!text) {
			return;
		}
		text.value = '';
		const test = {
			text,
			done: false,
			// id: Math.random.id,
		};
		tasks.push(test);
		renderListItems(tasks);
		console.log(test);
	};
	addButton.addEventListener('click', onCreateTask);
	
	
	// if (checkboxElem.checked){
	// 	checkboxElem.classList.add('list__item_done')
	// }
};
renderListItems(tasks);
// let checkElem = document.querySelector('.list__item');
// const valueCheckbox = () => {
// 		checkElem.checked = 'true';
// 		checkElem.classList.add('list__item_done');
// }
// checkElem.addEventListener('change', valueCheckbox);
//
// let checkFalse = document.querySelector('.list__item_done');
// const returnCheckbox = () => {
// 	checkElem.checked = 'false';
// 	checkElem.classList.remove('list__item_done');
// }
// checkFalse.addEventListener('change', returnCheckbox);
