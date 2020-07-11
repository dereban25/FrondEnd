const buttonSearch = document.querySelector('.search__btn');
const inputText = document.querySelector('.search__input');

const clickFunc = () => console.log(inputText.value);

buttonSearch.addEventListener('click', clickFunc);