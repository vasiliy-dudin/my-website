export function smoothScrollToAnchors() {
    function scrollToElement(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Add an anchor to the address bar
            history.pushState(null, '', `#${targetId}`);
        }
    }

    // Select all anchor links with href starting with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Add an event handler for each anchor link
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', scrollToElement);
    });
}