import { $mobileMenu } from './selectors.js';

function handleBurguerMenu(button) {
	console.log(button);
	const isPressed = button.classList.toggle('is-pressed');
	if (isPressed) {
		$mobileMenu.classList.add('is-expanded');
		button.ariaPressed = 'true';
		button.ariaExpanded = 'true';
		button.ariaLabel = 'Colapsar menu';
	} else {
		$mobileMenu.classList.remove('is-expanded');
		button.ariaPressed = 'false';
		button.ariaExpanded = 'false';
		button.ariaLabel = 'Desplegar menu';
	}
}

export { handleBurguerMenu };
