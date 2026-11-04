import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { inlineRule } from "@mdit/plugin-inline-rule";

// ==text==  -> <mark>text</mark>              neutral (gray) highlight
// !!text!! -> <mark class="--accent">text</mark> accent (green) highlight
function addMarkPlugins(md) {
	return md
		.use(inlineRule, {
			marker: "=",
			tag: "mark",
			token: "mark",
			nested: true,
			double: true,
			placement: "before-emphasis"
		})
		.use(inlineRule, {
			marker: "!",
			tag: "mark",
			token: "mark_accent",
			attrs: [["class", "--accent"]],
			nested: true,
			double: true,
			placement: "before-emphasis"
		});
}

/** The one Markdown renderer for pages, shortcodes and the `markdown` filter. */
export const md = addMarkPlugins(
	markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use(markdownItAnchor)
);
