import { load } from "js-yaml";
import pluginImages from "./eleventy.images.js";
import pluginShortcodes from "./eleventy.shortcodes.js";
import pluginFilters from "./eleventy.filters.js";
import tableOfContent from "@uncenter/eleventy-plugin-toc";
import { md } from "./eleventy.markdown.js";

const PROJECTS_GLOB = "src/pages/projects/**/*.md";
const PROJECT_TYPES = {
	caseStudy: "case-study",
	pet: "pet",
	screenshots: "screenshots",
};

/** Returns true unless the item is a draft in a production build. */
function isNotDraft(item) {
	return process.env.ELEVENTY_ENV !== "production" || !item.data.draft;
}

/** Returns enabled, non-draft projects of the given type, sorted by `order`. */
function getProjectsByType(collection, type) {
	return collection.getFilteredByGlob(PROJECTS_GLOB)
		.filter((item) => item.data.type === type && item.data.enabled)
		.filter(isNotDraft)
		.sort((a, b) => a.data.order - b.data.order);
}

export default function(config) {
	config.addDataExtension("yaml", contents => load(contents));
	config.addGlobalData("env", process.env.ELEVENTY_ENV);
	config.setLibrary("md", md);

	//////////// Collections
	config.addCollection('caseStudyProjects', (collection) =>
		getProjectsByType(collection, PROJECT_TYPES.caseStudy)
	);
	config.addCollection('petProjects', (collection) =>
		getProjectsByType(collection, PROJECT_TYPES.pet)
	);
	config.addCollection('screenshotsProjects', (collection) =>
		getProjectsByType(collection, PROJECT_TYPES.screenshots)
	);
	config.addCollection('allProjects', (collection) => [
		...getProjectsByType(collection, PROJECT_TYPES.caseStudy),
		...getProjectsByType(collection, PROJECT_TYPES.screenshots),
		...getProjectsByType(collection, PROJECT_TYPES.pet),
	]);

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
	// Sass and Rollup write straight to dist, so reload the browser on their
	// output instead of rebuilding Eleventy while they may still be writing
	config.setServerOptions({
		watch: ["dist/styles/**/*.css", "dist/js/**/*.js"],
	});

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			layouts: "_templates",
			data: "_data",
		},
		markdownTemplateEngine: "njk",
		templateFormats: [
			"md",
			"njk",
		],
	};
}
