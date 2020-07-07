export const getTitle = body => {
	return (document.querySelector('.title')).textContent;
};

// console.log(getTitle());

export const getDescription = body => {
	return (document.querySelector('.about')).innerText;
};

// console.log(getDescription());

export const getPlans = body => {
	return (document.querySelector('.plans')).innerHTML;
}

// console.log(getPlans());

export const getGoal = body => {
	return (document.querySelector('.goal')).outerHTML;
}
// console.log(getGoal());