import { $burgerBtn } from './selectors.js';
import { handleBurguerMenu } from './functions.js';

$burgerBtn.addEventListener('click', function () {
	handleBurguerMenu(this);
});
