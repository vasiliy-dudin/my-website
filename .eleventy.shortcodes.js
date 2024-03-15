const markdownIt = require("markdown-it");
const fsExtra = require("fs-extra");
const path = require("path");

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
	config.addPairedShortcode("projectSection", function(content, title, id) {
		 // Replace the tabs at the beginning of each line with an empty line
		 const cleanedContent = content.replace(/^\t+/gm, '');
		 const renderedContent = md.render(cleanedContent);

		 let idValue;
		 if (id) {
			idValue = id;
		 }
		 else {
			// Create an ID by removing spaces and converting to lowercase
			idValue = title.replace(/\s+/g, '-').toLowerCase();
		 }
		 
		 
		return `<div class="project-section"><h2 class="project-section__heading" id=${idValue}>${title}</h2>${renderedContent}</div>`;
	});
	config.addPairedShortcode("highlight", function(content) {
		return `<b class="project-section__highlights">${content}</b>`;
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


	config.addPairedShortcode("skill", async function(content, name, icon) {
		const iconPath = path.join(__dirname, `/src/pages/index/images/${icon}`);
		const svgContent = await fsExtra.readFile(iconPath, "utf-8");

		return `
		<div class="skill">
			<div class="skill__img">
				${svgContent}
			</div>
			<div class="skill__text">
				<h4 class="skill__name">${name}</h4>
				<div class="skill__desc">${content}</div>
			</div>
		</div>`;
	});
	

	  
}