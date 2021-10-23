import { $mobileMenu, $settingsMenu } from './selectors.js';

function handleBurguerMenu(button) {
	const isPressed = button.classList.toggle('is-pressed');
	if (isPressed) {
		$mobileMenu.classList.add('is-expanded');
		$settingsMenu.classList.remove('is-hidden');
		button.ariaPressed = 'true';
		button.ariaExpanded = 'true';
		button.ariaLabel = 'Colapsar menu';
	} else {
		$mobileMenu.classList.remove('is-expanded');
		$settingsMenu.classList.add('is-hidden');
		button.ariaPressed = 'false';
		button.ariaExpanded = 'false';
		button.ariaLabel = 'Desplegar menu';
	}
}

export { handleBurguerMenu };
