const buttonSingle = document.querySelector('.single-use-btn');


const clickButton = () => {
	console.log('clicked');
	buttonSingle.removeEventListener('click', clickButton);
}


buttonSingle.addEventListener('click', clickButton);