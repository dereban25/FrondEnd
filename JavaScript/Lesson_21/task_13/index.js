export const getSection = (num) => {
	const elemSpanNum = document.querySelector(`span[data-number='${num}']`);
	const parentClass = elemSpanNum.closest('.box');
	return parentClass.dataset.section;
}