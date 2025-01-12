export const projectNavigationColor = () => {
	const navLinks = document.querySelectorAll('.project-nav a, .project-neighbours__lnk');
	const darkSection = document.querySelector('.project-header-section');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const rect = entry.target.getBoundingClientRect();
				const sectionHeight = rect.height;
				const sectionTop = rect.top;

				navLinks.forEach(link => {
					const linkRect = link.getBoundingClientRect();
					const linkCenterY = linkRect.top + linkRect.height / 2;

					const isNotOverDarkSection = !(linkCenterY >= sectionTop &&
						linkCenterY <= (sectionTop + sectionHeight));

					link.classList.toggle('--light', isNotOverDarkSection);
				});
			});
		},
		{
			threshold: Array.from({ length: 101 }, (_, i) => i / 100),
			root: null
		}
	);

	if (darkSection) {
		observer.observe(darkSection);
	}
};