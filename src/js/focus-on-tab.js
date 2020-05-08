// Adds keyboard-accessible class to the <body> of the page in CSS
document.addEventListener('keydown', (e) => {
	if (e.key === 'Tab') {
		document.body.classList.add('keyboardAccessible');
	}
});

// Removes class from body in CSS
document.addEventListener('mousedown', () => {
	document.body.classList.remove('keyboardAccessible');
});