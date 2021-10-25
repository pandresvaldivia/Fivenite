import { $burgerBtn, $features } from './selectors.js';
import {
	handleBurguerMenu,
	collapseBurguerMenu,
	loadHandle,
} from './functions.js';

$burgerBtn.addEventListener('click', function () {
	handleBurguerMenu(this);
});

window.addEventListener('resize', () => {
	window.innerWidth >= 1230 && collapseBurguerMenu($burgerBtn);
});

for (const feature of $features) {
	loadHandle.observe(feature);
}
