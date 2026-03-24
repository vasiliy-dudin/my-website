import yaml from "js-yaml";
import pluginImages from "./eleventy.images.js";
import pluginShortcodes from "./eleventy.shortcodes.js";
import pluginFilters from "./eleventy.filters.js";
import tableOfContent from "@uncenter/eleventy-plugin-toc";

export default function(config) {
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
	config.addCollection('screenshotsProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) =>
				item.data.type === "screenshots" &&
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
		const screenshotsProjects = collection.getFilteredByGlob('src/pages/projects/**/*.md')
			.filter((item) =>
				item.data.type === "screenshots" &&
				item.data.enabled
			)
			.filter(isNotDraft)
			.sort((a, b) => a.data.order - b.data.order);
		return [...caseStudyProjects, ...screenshotsProjects, ...petProjects];
	});

	/////////// Plugins
	config.addPlugin(tableOfContent, {
		tags: ["h2"],
		ul: true,
		wrapper: function (toc) {
			return `${toc}`;
		}
	});

	/////////// Custom plugins or settings
	config.addPlugin(pluginShortcodes);
	config.addPlugin(pluginImages);
	config.addPlugin(pluginFilters);

	/////////// Build options
	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy("src/assets/**/*");
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
}
