import { $burgerBtn } from './selectors.js';
import { handleBurguerMenu, collapseBurguerMenu } from './functions.js';

$burgerBtn.addEventListener('click', function () {
	handleBurguerMenu(this);
});

window.addEventListener('resize', () => {
	window.innerWidth >= 1230 && collapseBurguerMenu($burgerBtn);
});
