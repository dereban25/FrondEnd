const buttonPagination = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
	console.log(event.target.dataset.pageNumber);
}

buttonPagination.forEach(el => el.addEventListener('click', handleClick));