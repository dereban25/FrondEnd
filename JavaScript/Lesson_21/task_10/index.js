export const finishForm = () => {
	const formInputElem = document.createElement('input');
	formInputElem.type = 'text';
	formInputElem.name = 'login';
	const formElem = document.querySelector('.login-form').prepend(formInputElem);
	(document.querySelector('input')).nextElementSibling.type = 'password';
	
}