import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import markdownIt from "markdown-it";

export default config => {

	// filehash
	const assetHashes = {};
	config.addFilter("filehash", (url) => {
		if (process.env.ELEVENTY_ENV !== 'production') {
			return url;
		}

		const filePath = path.join(config.dir.output, url);
		if (!assetHashes[url]) {
			const fileBuffer = fs.readFileSync(filePath);
			const hashSum = crypto.createHash("md5");
			hashSum.update(fileBuffer);
			assetHashes[url] = hashSum.digest("hex").substring(0, 8);
		}

		return `${url}?v=${assetHashes[url]}`;
	});

	const md = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	});
	config.addFilter("markdown", (content) => {
		if (!content) return '';
		const stringContent = String(content);
		return md.render(stringContent);
	});
}
