const Image = require("@11ty/eleventy-img");
const navigationPlugin = require('@11ty/eleventy-navigation');
const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const fs = require("fs-extra");
const glob = require('glob');
const htmlmin = require("html-minifier");

module.exports = function(config) {
	config.addDataExtension("yaml", contents => yaml.load(contents));
	config.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true
	  }));

	//config.addPlugin(navigationPlugin);

	config.addCollection('workProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/case-studies/**/*.md').sort(function(a, b) {
			return a.data.order - b.data.order;
		});
	});
	config.addCollection('petProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/pet-projects/**/*.md').sort(function(a, b) {
			return a.data.order - b.data.order;
		});
	});
	

	

	//////////// Shortcodes

	// MD in NJK
	config.addPairedShortcode("md", (content) => {
		const md = new markdownIt();
  		return md.render(content.replace(/^\s+/gm, ''));
	});

	config.addNunjucksAsyncShortcode("image", imageShortcode);

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

	// <picture>
	async function imageShortcode(src, className, alt, width) {
		if(alt === undefined) {
			throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
		}

		let widths = [];
			widths.push(width, width*2);
		let metadataOriginal = await Image(src, {
			widths: widths,
			formats: [null],
			urlPath: "/images/",
			outputDir: "./dist/images/"
		});
		let metadataWebp = await Image(src, {
			widths: widths,
			formats: ["webp"],
			urlPath: "/images/",
			outputDir: "./dist/images/",
			sharpWebpOptions: {
				quality: 85,
				smartSubsample: true
			}
		});

		return `
			<picture>
				${Object.values(metadataWebp).map(imageFormat => {
					return `
						<source 
							type="${imageFormat[0].sourceType}"
							srcset="${imageFormat[0].url}, ${imageFormat[1].url} 2x">
					`;
				})}
				<img
					${Object.values(metadataOriginal).map(item => {
						return `
							src="${item[0].url}"					
							srcset="${item[0].url}, ${item[1].url} 2x"
							width="${item[0].width}"
							height="${item[0].height}"
						`;
					})}
					class="${className}"
					alt="${alt}"					
					decoding="async"
					loading="lazy">
			</picture>
		`;
	}



	/////////// Build options

	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy("src/scripts");
	config.addPassthroughCopy( "src/assets/**/*");
	config.addPassthroughCopy("src/*.txt");
	config.addPassthroughCopy("src/manifest.json");
	config.addWatchTarget("./src/styles/**/*.styl");
	config.addWatchTarget("./src/case-studies/**/*.md");
	config.addWatchTarget("./src/pet-projects/**/*.md");
	config.addPassthroughCopy("CNAME");

	// Copy content images to /dist
	config.on('afterBuild', async () => {
		const srcDir = 'src/pages/';
		const destDir = 'dist/';
		const imageExtensions = ['svg', 'png', 'webp', 'jpg'];
		const pattern = `${srcDir}/**/*.{${imageExtensions.join(',')}}`;
	
		try {
			glob.sync(pattern).forEach(async (srcPath) => {
				const destPath = `${destDir}${srcPath.substring(srcDir.length)}`;
				await fs.copy(srcPath, destPath);
			});
			console.log('Image files have been copied');
		} catch (err) {
			console.error(err);
		}
	});

	// Minify HTML for 'production' environment
	if (process.env.ELEVENTY_ENV === 'production') {
		config.addTransform("htmlmin", function(content, outputPath) {
		if (outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true
			});
			return minified;
		}
		return content;
		});
	}
	


	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			layouts: "_templates",
			data: "_data",
		},
		dataTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true,
		templateFormats: [
			"md",
			"njk",
		],
	};
};
