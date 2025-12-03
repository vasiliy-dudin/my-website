const Image = require("@11ty/eleventy-img");
const path = require("path");

// Constants
const IMAGE_CONFIG = {
	outputURL: "/images/",
	outputFolder: "./dist/images/",
	defaultLightboxWidth: 1200,
	defaultPriority: "high",
	avifQuality: 77,
	avifEffort: 6
};

const LOADING_ATTRIBUTES = {
	top: 'loading="eager" decoding="sync" fetchpriority="high"',
	high: 'loading="eager" decoding="auto"',
	low: 'loading="lazy" decoding="async"'
};

// Helper: Resolve absolute path from different input formats
function resolveImagePath(src, currentPagePath) {
	if (src.startsWith('/')) {
		return path.join('src', src);
	}
	if (/^[a-zA-Z]:/.test(src)) {
		return src;
	}
	const currentDir = currentPagePath ? path.dirname(currentPagePath) : '';
	return path.join(currentDir, src);
}

// Helper: Generate multiple image sizes
function generateImageWidths(baseWidth) {
	return [baseWidth, baseWidth * 1.25, baseWidth * 1.5, baseWidth * 2];
}

// Helper: Generate images with Eleventy Image
async function generateImages(srcAbsolute, widths) {
	return await Image(srcAbsolute, {
		widths,
		formats: ["avif"],
		urlPath: IMAGE_CONFIG.outputURL,
		outputDir: IMAGE_CONFIG.outputFolder,
		cacheOptions: {
			duration: "1y",
			directory: ".cache"
		},
		sharpAvifOptions: {
			quality: IMAGE_CONFIG.avifQuality,
			effort: IMAGE_CONFIG.avifEffort
		}
	});
}

// Helper: Build srcset attribute
function buildSrcset(metadata) {
	const images = Object.values(metadata)[0];
	return `${images[1].url} 1.25x, ${images[2].url} 1.5x, ${images[3].url} 2x`;
}

// Helper: Get loading attributes based on priority
function getLoadingAttributes(priority) {
	return LOADING_ATTRIBUTES[priority] || LOADING_ATTRIBUTES.high;
}

// Helper: Validate parameters
function validateParams({src, alt, width, priority, lightboxWidth, lightbox}) {
	if (alt === undefined) {
		throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
	}
	
	const largeSizeWidth = (lightboxWidth && lightboxWidth !== "undefined") 
		? parseInt(lightboxWidth, 10) 
		: IMAGE_CONFIG.defaultLightboxWidth;
	
	const imagePriority = (priority && priority !== "undefined") 
		? priority 
		: IMAGE_CONFIG.defaultPriority;
	
	const isLightboxEnabled = lightbox === true;
	
	return { largeSizeWidth, imagePriority, isLightboxEnabled };
}



// Main shortcode function
const imageShortcode = async function({src, className = "", alt, width, priority = "high", lightbox, lightboxWidth, lightboxCaption}) {
	// Validate and extract parameters
	const { largeSizeWidth, imagePriority, isLightboxEnabled } = validateParams({
		src, alt, width, priority, lightboxWidth, lightbox
	});

	// Resolve image path
	const srcAbsolute = resolveImagePath(src, this.page.inputPath);
	
	// Generate responsive images
	const widths = generateImageWidths(width);
	const metadata = await generateImages(srcAbsolute, widths);
	
	// Generate lightbox image if needed
	let largeImg = null;
	if (isLightboxEnabled) {
		const lightboxMetadata = await generateImages(srcAbsolute, [largeSizeWidth]);
		largeImg = Object.values(lightboxMetadata)[0][0];
	}
	
	// Build image attributes
	const mainImg = Object.values(metadata)[0][0];
	const srcset = buildSrcset(metadata);
	const loadingAttrs = getLoadingAttributes(imagePriority);
	const finalClass = isLightboxEnabled 
		? (className ? `${className} image-zoomable` : 'image-zoomable') 
		: className;
	
	// Build img tag
	const imgTag = `<img src="${mainImg.url}" srcset="${srcset}" width="${mainImg.width}" height="${mainImg.height}" class="${finalClass}" alt="${alt}" ${loadingAttrs}>`;
	
	// Wrap in lightbox link if enabled
	if (isLightboxEnabled) {
		const caption = (lightboxCaption && lightboxCaption !== "undefined") 
			? ` data-caption="${lightboxCaption}"` 
			: '';
		return `<a href="${largeImg.url}" data-fancybox="lightbox"${caption} onclick="plausible('Lightbox open', { props: { page: window.location.pathname }})">${imgTag}</a>`;
	}
	
	return imgTag;
};

module.exports = config => {
	config.addAsyncShortcode("image", imageShortcode);
};

module.exports.imageShortcode = imageShortcode;