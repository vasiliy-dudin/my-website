const markdownIt = require("markdown-it");
const markdownItAnchor = require('markdown-it-anchor');
const fsExtra = require("fs-extra");
const path = require("path");
const { imageShortcode } = require("./.eleventy.images.js");

module.exports = config => {
	const md = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use(markdownItAnchor);
	config.setLibrary("md", md);


	// MD in NJK
	config.addPairedShortcode("md", (content) => {
		return md.render(content.replace(/^\s+/gm, ''));
	});

	// Adds content for project header
	let headerContent = '';
	config.addPairedShortcode("LongHeaderDescription", function(content) {
		headerContent = md.render(content);
		return '';
	});
	config.addShortcode("getLongHeaderDescription", function () {
		return `<div className="project-header__longDescription">${headerContent}</div>`;
	});


	// Wrapper for project sections
	config.addPairedShortcode("projectSection", function(content) {
		// Convert tabs to spaces while preserving relative indentation
		const cleanedContent = content.replace(/^(\t+)/gm, (match, tabs) => '  '.repeat(tabs.length));
		const renderedContent = md.render(cleanedContent);
		
		return `<div class="project-section">
			<div class="container --project">${renderedContent}</div>
		</div>`;
	});

	// Emphasize text block
	config.addPairedShortcode("callout", function(content) {
		// Convert tabs to spaces while preserving relative indentation
		const cleanedContent = content.replace(/^(\t+)/gm, (match, tabs) => '  '.repeat(tabs.length));
		const renderedContent = md.render(cleanedContent);

		return `<div class="callout">${renderedContent}</div>`;
	});

	// Impact in a case study
	config.addShortcode("impact", function(args) {
		let goalHTML = ''
		let nameHTML = ''
		let valueOldHTML = ''

		if (args.valueOld) {
			valueOldHTML = `<span class="impact__oneValue">${args.valueOld}</span> → `
		}
		if (args.goal) {
			goalHTML = `<div class="impact__goal">Goal: ${args.goal}</div>`
		}
		if (args.name) {
			nameHTML = `<div class="impact__name">${args.name}</div>`
		}

		return `<div class="impact --${args.goodOrBad}${args.mainOrNot ? ` --${args.mainOrNot}` : ''}">
				<div class="impact__values">
					${valueOldHTML}<span class="impact__oneValue">${args.valueNew}</span>
				</div>
				${goalHTML}${nameHTML}
			</div>`;
	});
	config.addPairedShortcode("ImpactRow", function(content) {
		return `<div class="impactRow">${content}</div>`;
	});

	// emphasize inline values
	config.addShortcode("highlightValue", function(val, classname) {
		return `<span class="highlightValue --${classname}">${val}</span>`;
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



	// My Role block with team members icons and descriptions
	config.addPairedShortcode("myRole", async function(content, args) {		
		// Parse team members from arguments
		let teamMembersHTML = '';
		if (args.team) {
			const teamMembers = Array.isArray(args.team) ? args.team : [args.team];
			const teamMembersPromises = teamMembers.map(async member => {
				const icon = member.icon || 'person';
				const role = member.role || '';
				const count = member.count || 1;
				const displayCount = count > 1 ? ` ×${count}` : '';
				
				let iconContent = '';
				if (icon === 'me') {
					// Use image shortcode for photo (path from src root)
					iconContent = await imageShortcode.call(this, {
						src: '/pages/index/images/photo.jpg',
						className: '',
						alt: 'Vasily Dudin',
						width: 64,
						priority: 'low'
					});
				} else {
					// Read SVG file content and inline it
					const svgPath = path.join(__dirname, 'src', 'assets', `my-role-${icon}.svg`);
					let svgContent = fsExtra.readFileSync(svgPath, 'utf8');
					// Clean up the SVG content for inline use
					svgContent = svgContent.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
					iconContent = svgContent;
				}
				
				return `<div class="my-role__team-member">
					<div class="my-role__icon my-role__icon--${icon}">${iconContent}</div>
					<div class="my-role__label">${role}${displayCount}</div>
				</div>`;
			});
			teamMembersHTML = (await Promise.all(teamMembersPromises)).join('');
			
			teamMembersHTML = `<div class="my-role__team">${teamMembersHTML}</div>`;
		}
		
		// Convert tabs to spaces while preserving relative indentation
		const cleanedContent = content.replace(/^(\t+)/gm, (match, tabs) => '  '.repeat(tabs.length));
		const renderedContent = md.render(cleanedContent);
		
		return `<div class="my-role">
			${teamMembersHTML}
			<div class="my-role__content">${renderedContent}</div>
		</div>`;
	});

	// Design Process for case studies
	config.addShortcode("designProcess", function(args) {
		// Parse timeline steps from arguments
		let timelineHTML = '';
		if (args.steps) {
			const steps = Array.isArray(args.steps) ? args.steps : [args.steps];
			timelineHTML = steps.map((step, index) => {
				const icon = step.icon || 'default';
				const title = step.title || '';
				const substeps = step.substeps || [];
				
				// No icons needed
				
				// Generate substeps HTML
				let substepsHTML = '';
				if (substeps.length > 0) {
					const substepsList = substeps.map(substep => `<li class="process__substep">${substep}</li>`).join('');
					substepsHTML = `<ul class="process__substeps">${substepsList}</ul>`;
				}
				
				return `<div class="process__step">
					<div class="process__step-header">
						<h5 class="process__step-title">${title}</h5>
					</div>
					${substepsHTML}
				</div>`;
			}).join('');
		}
		
		return `<div class="design-process">${timelineHTML}</div>`;
	});
	
	  
}