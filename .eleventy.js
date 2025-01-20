//const navigationPlugin = require('@11ty/eleventy-navigation');
const yaml = require("js-yaml");

const pluginImages = require("./.eleventy.images.js");
const pluginShortcodes = require("./.eleventy.shortcodes.js");
const pluginFilters= require("./.eleventy.filters.js");
const tableOfContent = require("@uncenter/eleventy-plugin-toc");


module.exports = function(config) {
	config.addDataExtension("yaml", contents => yaml.load(contents));
	config.addGlobalData("env", process.env.ELEVENTY_ENV);

	//////////// Collections
	const isNotDraft = item => 
		process.env.ELEVENTY_ENV !== 'production' || !item.data.draft;

	config.addCollection('caseStudyProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/projects/**/*.md')
		.filter((item) => 
			item.data.type === "case-study" && 
			item.data.enabled
		)
		.filter(isNotDraft)
		.sort((a, b) => a.data.order - b.data.order);
	});
	config.addCollection('petProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => 
				item.data.type === "pet" &&
				item.data.enabled
			)
			.filter(isNotDraft)
			.sort((a, b) => a.data.order - b.data.order);
	});
	config.addCollection('allProjects', (collection) => {
		const caseStudyProjects = collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => 
				item.data.type === "case-study" &&
				item.data.enabled
			)
			.filter(isNotDraft)
			.sort((a, b) => a.data.order - b.data.order);
		const petProjects = collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => 
				item.data.type === "pet" &&
				item.data.enabled
			)
			.filter(isNotDraft)
			.sort((a, b) => a.data.order - b.data.order);
		return [...caseStudyProjects, ...petProjects];
	});

	/////////// Plugins
	config.addPlugin(tableOfContent, {
		tags: ["h2"],
		ul: true, // whether to a use a `ul` or `ol`
		wrapper: function (toc) {
			// wrapper around the generated TOC
			return `${toc}`;
		}
	});


	/////////// Custom plugins or settings
	config.addPlugin(pluginShortcodes);
	config.addPlugin(pluginImages);
	config.addPlugin(pluginFilters);



	/////////// Build options
	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy( "src/assets/**/*");
	config.addPassthroughCopy("src/*.txt");
	config.addWatchTarget("./src/styles/**/*");
	config.addWatchTarget("./src/pages/**/*");



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
