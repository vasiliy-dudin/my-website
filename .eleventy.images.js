const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = config => {
	// image
	config.addAsyncShortcode("image", async function imageShortcode(src, className, alt, width) {
		if(alt === undefined) {
			throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
		}

		const currentDir = this.page.inputPath ? path.dirname(this.page.inputPath) : '';
		const srcAbsolute = currentDir + '/' + src;
		const outputURL = "/images/";
		const outputFolder = "./dist/images/";
		let widths = [];
			widths.push(width, width*1.25, width*1.5, width*2);

		let metadataAvif = await Image(srcAbsolute, {
			widths: widths,
			formats: ["avif"],
			urlPath: outputURL,
			outputDir: outputFolder,
			sharpAvifOptions: {
				quality: 85,
				effort: 9
			}
		});

		const avifSrcset = Object.values(metadataAvif)
			.map(item => `${item[1].url} 1.25x, ${item[2].url} 1.5x, ${item[3].url} 2x`)
			.join(", ");
		
		const mainImg = Object.values(metadataAvif)[0][0];
		return `<img src="${mainImg.url}" srcset="${avifSrcset}" width="${mainImg.width}" height="${mainImg.height}" class="${className}" alt="${alt}" decoding="async" loading="auto">`;
	});
	
}