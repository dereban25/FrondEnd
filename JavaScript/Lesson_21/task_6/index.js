export const setButton = text => {
	return (document.querySelector('body')).innerHTML = '<button>' + text + '</button>';
}