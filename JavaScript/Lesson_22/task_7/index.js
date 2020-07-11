const button1 = document.querySelector('.btn');
const button2 = document.querySelector('.btn').nextElementSibling;

const handleClick = (event) => {
	console.log(event.target.textContent);
}

button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);