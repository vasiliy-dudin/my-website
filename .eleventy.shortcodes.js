const markdownIt = require("markdown-it");

module.exports = config => {
	const md = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	});
	config.setLibrary("md", md);


	// MD in NJK
	config.addPairedShortcode("md", (content) => {
		return md.render(content.replace(/^\s+/gm, ''));
	});


	// Wrapper for project sections
	config.addPairedShortcode("projectSection", function(content, title) {
		 // Replace the tabs at the beginning of each line with an empty line
		 const cleanedContent = content.replace(/^\t+/gm, '');
		 const renderedContent = md.render(cleanedContent);
		 // Create an ID by removing spaces and converting to lowercase
		 const titleId = title.replace(/\s+/g, '-').toLowerCase();
		return `<div class="project-section"><h2 class="project-section__heading" id=${titleId}>${title}</h2>${renderedContent}</div>`;
	});


	// currentYear
	config.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

	// Projects
	config.addPairedShortcode("projectColumn", function(content) {
		return `
			<div class="project-body__column">
				${content}
			</div>
			`;
	});

	  
}