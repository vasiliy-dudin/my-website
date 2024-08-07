export function scrollSpy(offset = 56) {
	document.addEventListener('DOMContentLoaded', () => {
		const sections = document.querySelectorAll('.project-header, .project-section h2');
		const navLinks = document.querySelectorAll('.project-nav a');

		const updateActiveLink = () => {
			let currentSection = null;

			sections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top - offset;
				if (sectionTop <= 0) {
					currentSection = section;
				}
			});

			// Проверка конца страницы
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - offset) {
				currentSection = sections[sections.length - 1];
			}

			if (currentSection) {
				navLinks.forEach(link => {
					link.classList.remove('--active');
					if (link.getAttribute('href').substring(1) === currentSection.id) {
						link.classList.add('--active');
					}
				});
			}
		};

		// Обновляем активный пункт навигации при прокрутке
		window.addEventListener('scroll', updateActiveLink);

		// Обновляем активный пункт навигации при загрузке страницы
		updateActiveLink();
	});
}