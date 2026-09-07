import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import fsExtra from "fs-extra";
import path from "path";
import { imageShortcode } from "./eleventy.images.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Rendered width of a carousel switcher thumbnail
const CAROUSEL_THUMB_WIDTH = 180;

/**
 * Escapes a front-matter string for use in an HTML attribute or text node.
 * Returns the escaped string.
 */
function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export default config => {
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
		const impactHTML = [
			`<div class="impact --${args.goodOrBad}${args.mainOrNot ? ` --${args.mainOrNot}` : ''}">`,
				`<div class="impact__values">
					${args.valueOld ? `<span class="impact__oneValue">${args.valueOld}</span> → ` : ''}<span class="impact__oneValue">${args.valueNew}</span>
				</div>`,
				args.goal ? `<div class="impact__goal">Goal: ${args.goal}</div>` : '',
				args.name ? `<div class="impact__name">${args.name}</div>` : '',
				args.mainOrNot === 'main' ? `<div class="impact__mainLabel">Main metric</div>` : '',
			`</div>`
		].filter(Boolean).join('');

		return impactHTML;
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
					src: '/pages/index/images/photo.png',
					className: '',
					alt: '',
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

	// Image carousel with chip switchers and a per-slide caption
	config.addShortcode("carousel", async function(args) {
		if (!args.id) {
			throw new Error("Missing `id` on carousel shortcode");
		}
		if (!args.slides) {
			throw new Error(`Missing \`slides\` on carousel shortcode: ${args.id}`);
		}
		if (!args.width) {
			throw new Error(`Missing \`width\` on carousel shortcode: ${args.id}`);
		}

		const carouselId = args.id;
		const lightboxGroup = `carousel-${carouselId}`;
		const slides = Array.isArray(args.slides) ? args.slides : [args.slides];

		if (!slides.length) {
			throw new Error(`Empty \`slides\` on carousel shortcode: ${args.id}`);
		}

		const slidesHTML = await Promise.all(slides.map(async (slide, index) => {
			const panelId = `carousel-${carouselId}-panel-${index}`;
			const chipId = `carousel-${carouselId}-chip-${index}`;
			const caption = escapeHtml(slide.caption || '');

			const imgHTML = await imageShortcode.call(this, {
				src: slide.src,
				className: '',
				alt: slide.alt,
				width: args.width,
				priority: args.priority || 'low',
				lightbox: true,
				lightboxWidth: args.lightboxWidth,
				lightboxCaption: caption,
				lightboxGroup
			});

			return `<div class="f-carousel__slide" role="tabpanel" id="${panelId}" aria-labelledby="${chipId}" data-caption="${caption}">${imgHTML}</div>`;
		}));

		const chipsHTML = await Promise.all(slides.map(async (slide, index) => {
			const panelId = `carousel-${carouselId}-panel-${index}`;
			const chipId = `carousel-${carouselId}-chip-${index}`;
			const label = escapeHtml(slide.label || `Slide ${index + 1}`);
			const isSelected = index === 0;

			// The thumbnail is decorative: `label` names the button instead
			const thumbHTML = await imageShortcode.call(this, {
				src: slide.src,
				className: 'carousel__thumb',
				alt: '',
				width: CAROUSEL_THUMB_WIDTH,
				priority: 'low'
			});

			return `<button type="button" class="carousel__chip" role="tab" id="${chipId}" aria-controls="${panelId}" aria-selected="${isSelected}" aria-label="${label}" tabindex="${isSelected ? 0 : -1}">${thumbHTML}</button>`;
		}));

		const firstCaption = escapeHtml(slides[0].caption || '');
		const chipsLabel = escapeHtml(args.chipsLabel || 'Choose slide');

		// A fixed height is emitted as a ratio so the frame keeps its
		// proportions as the page narrows instead of leaving a tall gap
		const frameStyle = args.height
			? ` style="--carousel-ratio: ${args.width} / ${args.height}"`
			: '';
		const fixedHeightAttr = args.height ? ' data-fixed-height' : '';

		return `<figure class="carousel" id="carousel-${carouselId}"${fixedHeightAttr}${frameStyle}>
			<div class="f-carousel" data-carousel>
				<div class="f-carousel__viewport">
					${slidesHTML.join('')}
				</div>
			</div>
			<div class="carousel__chips" role="tablist" aria-label="${chipsLabel}">
				${chipsHTML.join('')}
			</div>
			<figcaption class="carousel__caption" aria-live="polite">${firstCaption}</figcaption>
		</figure>`;
	});
}
