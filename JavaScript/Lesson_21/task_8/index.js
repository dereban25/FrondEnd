
export const createButton = buttonText => {
	const buttonElement = document.createElement('button');
	buttonElement.textContent = buttonText;
	return (document.querySelector('body')).append(buttonElement);
}