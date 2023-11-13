export function scrollToTop() {
	const button = document.querySelector('.scroll-to-top');

	// Function for smooth scrolling
	function scroll() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Function to check if the button should be shown
	function toggleVisibility() {
		button.style.display = window.pageYOffset > 300 ? 'block' : 'none';
	}

	// Check if the button exists before adding event handlers
	if (button) {
		button.addEventListener('click', scroll);
		window.addEventListener('scroll', toggleVisibility);

		// Initialize visibility upon loading
		toggleVisibility();
	}
}