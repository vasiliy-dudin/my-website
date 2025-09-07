const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = config => {
	// image
	config.addAsyncShortcode("image", async function imageShortcode({src, className = "", alt, width, priority = "high", lightbox, bigWidth, lightboxCaption}) {
		if(alt === undefined) {
			throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
		}

		// Set default bigWidth if not provided  
		const largeSizeWidth = (bigWidth && bigWidth !== "undefined") ? parseInt(bigWidth, 10) : 1200;
		
		// Set default priority if not provided
		const imagePriority = (priority && priority !== "undefined") ? priority : "high";
		
		// Check if lightbox is enabled (could be boolean true or string "lightbox")
		const isLightboxEnabled = lightbox && lightbox !== "undefined" && (lightbox === true || lightbox === "lightbox");

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
		console.log(`Generated ${Object.values(metadataAvif)[0].length} images for ${src}`);

		// Generate large image for lightbox if needed
		let largeImg = null;
		if (isLightboxEnabled) {
			let metadataLightbox = await Image(srcAbsolute, {
				widths: [largeSizeWidth], // Use bigWidth as target width
				formats: ["avif"],
				urlPath: outputURL,
				outputDir: outputFolder,
				sharpAvifOptions: {
					quality: 85,
					effort: 9
				}
			});
			largeImg = Object.values(metadataLightbox)[0][0];
			console.log(`Generated ${Object.values(largeImg)[0].length} lightbox images for ${src}`);
		}

		const avifSrcset = Object.values(metadataAvif)
			.map(item => `${item[1].url} 1.25x, ${item[2].url} 1.5x, ${item[3].url} 2x`)
			.join(", ");
		
		const mainImg = Object.values(metadataAvif)[0][0];
		
		// Set loading and decoding attributes based on priority
		let loadingAttrs = "";
		switch(imagePriority) {
			case "top":
				loadingAttrs = `loading="eager" decoding="sync" fetchpriority="high"`;
				break;
			case "high":
				loadingAttrs = `loading="eager" decoding="auto"`;
				break;
			case "low":
				loadingAttrs = `loading="lazy" decoding="async"`;
				break;
			default:
				loadingAttrs = `loading="eager" decoding="auto"`; // fallback to "high"
		}
		
		// Generate img tag
		const finalClass = isLightboxEnabled ? (className ? `${className} image-zoomable` : 'image-zoomable') : className;
		const output = `<img src="${mainImg.url}" srcset="${avifSrcset}" width="${mainImg.width}" height="${mainImg.height}" class="${finalClass}" alt="${alt}" ${loadingAttrs}>`;
		
		// If the lightbox parameter is specified, wrap in a link for the FancyBox
		if (isLightboxEnabled) {
			const lightboxCaptionAttr = (lightboxCaption && lightboxCaption !== "undefined") ? ` data-caption="${lightboxCaption}"` : '';
			return `<a href="${largeImg.url}" data-fancybox="lightbox"${lightboxCaptionAttr}>${output}</a>`;
		}
		
		// Normal image without FancyBox
		return output;
	});
	
}