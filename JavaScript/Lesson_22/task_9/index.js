const textInput = document.querySelector('.task-status');

const changeInput = (event) => console.log(event.target.checked);

textInput.addEventListener('change', changeInput);