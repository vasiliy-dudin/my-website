const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

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
				assetHashes[url] = hashSum.digest("hex").substring(0, 8);;
			}
	
			return `${url}?v=${assetHashes[url]}`;
		});



}