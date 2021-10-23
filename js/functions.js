function handleBurguerMenu(button) {
	console.log(button);
	const isPressed = button.classList.toggle('is-pressed');
	if (isPressed) {
		button.ariaPressed = 'true';
		button.ariaExpanded = 'true';
		button.ariaLabel = 'Colapsar menu';
	} else {
		button.ariaPressed = 'false';
		button.ariaExpanded = 'false';
		button.ariaLabel = 'Desplegar menu';
	}
}

export { handleBurguerMenu };
