const inputText = document.querySelector('.text-input');
const valueText = () => console.log(inputText.value);
inputText.addEventListener('change',valueText);
