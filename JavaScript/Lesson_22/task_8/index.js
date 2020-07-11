const textInput = document.querySelector('.text-input');

const changeText = (event) => {
	console.log(event.target.value)
}

textInput.addEventListener('change', changeText);