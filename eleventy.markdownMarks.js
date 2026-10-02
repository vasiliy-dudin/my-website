import { inlineRule } from "@mdit/plugin-inline-rule";

// ==text==  -> <mark>text</mark>              neutral (gray) highlight
// !!text!! -> <mark class="--accent">text</mark> accent (green) highlight
export function addMarkPlugins(md) {
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
