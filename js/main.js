import { $burgerBtn } from './selectors.js';
import { handleBurguerMenu, collapseBurguerMenu } from './functions.js';

$burgerBtn.addEventListener('click', function () {
	handleBurguerMenu(this);
});

window.addEventListener('resize', () => {
	console.log(window.innerWidth);
	console.log(window.innerWidth >= 1230);
	window.innerWidth >= 1230 && collapseBurguerMenu($burgerBtn);
});
