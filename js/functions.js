import { $mobileMenu, $settingsMenu, $body } from './selectors.js';

function handleBurguerMenu(button) {
	const isPressed = button.classList.toggle('is-pressed');
	if (isPressed) {
		window.scrollTo(0, 0);
		$mobileMenu.classList.add('is-expanded');
		$settingsMenu.classList.add('is-visible');
		$body.style.overflow = 'hidden';
		button.ariaPressed = 'true';
		button.ariaExpanded = 'true';
		button.ariaLabel = 'Colapsar menu';
	} else {
		collapseBurguerMenu(button);
	}
}

function collapseBurguerMenu(button) {
	button.classList.remove('is-pressed');
	$mobileMenu.classList.remove('is-expanded');
	$settingsMenu.classList.remove('is-visible');
	$body.style.overflow = 'auto';
	button.ariaPressed = 'false';
	button.ariaExpanded = 'false';
	button.ariaLabel = 'Desplegar menu';
}

export { handleBurguerMenu, collapseBurguerMenu };
