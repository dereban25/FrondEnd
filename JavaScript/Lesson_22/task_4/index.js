const checkboxElem = document.querySelector('.task-status');
const valueCheckbox = () => console.log(checkboxElem.checked);
checkboxElem.addEventListener('change', valueCheckbox);