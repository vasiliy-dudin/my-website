//const navigationPlugin = require('@11ty/eleventy-navigation');
const yaml = require("js-yaml");

const pluginImages = require("./.eleventy.images.js");
const pluginShortcodes = require("./.eleventy.shortcodes.js");
const pluginFilters= require("./.eleventy.filters.js");

module.exports = function(config) {
	config.addDataExtension("yaml", contents => yaml.load(contents));
	config.addGlobalData("env", process.env.ELEVENTY_ENV);

	//////////// Collections
	config.addCollection('caseStudyProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => item.data.type === "case-study")
			.sort((a, b) => a.data.order - b.data.order);
	});
	config.addCollection('petProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => item.data.type === "pet")
			.sort((a, b) => a.data.order - b.data.order);
	});
	config.addCollection('allProjects', (collection) => {
		const caseStudyProjects = collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => item.data.type === "case-study")
			.sort((a, b) => a.data.order - b.data.order);
		const petProjects = collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) => item.data.type === "pet")
			.sort((a, b) => a.data.order - b.data.order);
		return [...caseStudyProjects, ...petProjects];
	});

	
	/////////// Custom plugins or settings
	config.addPlugin(pluginShortcodes);
	config.addPlugin(pluginImages);
	config.addPlugin(pluginFilters);



	/////////// Build options
	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy( "src/assets/**/*");
	config.addPassthroughCopy("src/*.txt");
	config.addPassthroughCopy("src/manifest.json");
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
