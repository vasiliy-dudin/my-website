const markdownIt = require("markdown-it");

module.exports = config => {
	config.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true
	  }));


	// MD in NJK
	config.addPairedShortcode("md", (content) => {
		const md = new markdownIt();
  		return md.render(content.replace(/^\s+/gm, ''));
	});


	config.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

	// Projects
	config.addPairedShortcode("projectColumn", function(content) {
		return `
			<div class="project-desc__column">
				${content}
			</div>
			`;
	});

	config.addPairedShortcode("projectDesc", function(content, title) {
		return `
			<div>
				<h2 class="project-desc__heading">${title}</h2>
				${content}
			</div>
			`;
	});	
}