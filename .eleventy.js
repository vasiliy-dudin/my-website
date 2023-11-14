//const navigationPlugin = require('@11ty/eleventy-navigation');
const yaml = require("js-yaml");

const pluginImages = require("./.eleventy.images.js");
const pluginShortcodes = require("./.eleventy.shortcodes.js");
const pluginFilters= require("./.eleventy.filters.js");

module.exports = function(config) {
	config.addDataExtension("yaml", contents => yaml.load(contents));
	config.addGlobalData("env", process.env.ELEVENTY_ENV);

	//////////// Collections
	config.addCollection('workProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/case-studies/**/*.md')
			.sort((a, b) => a.data.order - b.data.order);
	  });	  
	  config.addCollection('petProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/pet-projects/**/*.md')
			.sort((a, b) => a.data.order - b.data.order);
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
	config.addWatchTarget("./src/styles/**/*.styl");
	config.addWatchTarget("./src/case-studies/**/*.md");
	config.addWatchTarget("./src/pet-projects/**/*.md");



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
