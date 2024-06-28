const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = config => {
	// image
	config.addAsyncShortcode("image", async function imageShortcode(src, className, alt, width) {
		if(alt === undefined) {
			throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
		}

		const currentDir = this.page.inputPath ? path.dirname(this.page.inputPath) : '';
		const srcAbsolite = currentDir + '/' + src;
		const outputURL = "/images/";
		const outputFolder = "./dist/images/";
		let widths = [];
			widths.push(width, width*1.25, width*1.5, width*2);

		let metadataAvif = await Image(srcAbsolite, {
			widths: widths,
			formats: ["avif"],
			urlPath: outputURL,
			outputDir: outputFolder,
			sharpAvifOptions: {
				quality: 85,
				effort: 9
			}
		});
		let metadataWebp = await Image(srcAbsolite, {
			widths: widths,
			formats: ["webp"],
			urlPath: outputURL,
			outputDir: outputFolder,
			sharpWebpOptions: {
				quality: 94,
				smartSubsample: true
			}
		});

		const avifSrcset = Object.values(metadataAvif)
			.map(item => `${item[0].url}, ${item[1].url} 1.25x, ${item[2].url} 1.5x, ${item[3].url} 2x`)
			.join(", ");

		const webpSources = Object.values(metadataWebp)
			.map(item => {
				const src = item[0].url;
				const srcset = `${item[0].url}, ${item[1].url} 1.25x, ${item[2].url} 1.5x, ${item[3].url} 2x`;
				const width = item[0].width;
				const height = item[0].height;
				return `src="${src}" srcset="${srcset}" width="${width}" height="${height}" class="${className}" alt="${alt}" decoding="async" loading="auto"`;
			})
			.join(" ");

		return `<picture><source srcset="${avifSrcset}" type="image/avif"><img ${webpSources}></picture>`;
	});
	
}