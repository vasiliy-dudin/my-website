export function scrollToTop() {
	const button = document.querySelector('.scroll-to-top');

	// Function to check if the button should be shown
	function toggleVisibility() {
		button.style.display = window.pageYOffset > 300 ? 'block' : 'none';
	}

	// Check if the button exists before adding event handlers
	if (button) {
		window.addEventListener('scroll', toggleVisibility);
		toggleVisibility();
	}
}