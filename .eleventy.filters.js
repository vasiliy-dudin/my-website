const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const markdownIt = require("markdown-it");

module.exports = config => {		

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
		// Преобразуем в строку, если пришло что-то другое
		const stringContent = String(content);
		return md.render(stringContent);
	});


}