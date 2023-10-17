const Image = require("@11ty/eleventy-img");
const navigationPlugin = require('@11ty/eleventy-navigation');
const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const fs = require("fs-extra");
const glob = require('glob');
const htmlmin = require("html-minifier");
const path = require("path");

module.exports = function(config) {
	config.addDataExtension("yaml", contents => yaml.load(contents));
	
	config.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true
	  }));
	/* config.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true
	  }).use(markdownItEleventyImg, {
		resolvePath: (filepath, env) => path.join(path.dirname(env.page.inputPath), filepath),
		imgOptions: {
		  widths: [600, 300],
		  urlPath: "/images/",
		  outputDir: "./dist/images/",
		  formats: ["avif", "webp", "jpeg"]
		},
		globalAttributes: {
		  class: "markdown-image",
		  decoding: "async",
		  sizes: "100vw"
		},
		renderImage(image, attributes) {
		  const [ Image, options ] = image;
		  const [ src, attrs ] = attributes;
	  
		  Image(src, options);
	  
		  const metadata = Image.statsSync(src, options);
		  const imageMarkup = Image.generateHTML(metadata, attrs, {
			whitespaceMode: "inline"
		  });
	  
		  return `<figure>${imageMarkup}${attrs.title ? `<figcaption>${attrs.title}</figcaption>` : ""}</figure>`;
		}
	  })); */


	//config.addPlugin(navigationPlugin);

	config.addCollection('workProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/case-studies/**/*.md')
			.sort((a, b) => a.data.order - b.data.order);
	  });
	  
	  config.addCollection('petProjects', (collection) => {
		return collection.getFilteredByGlob('src/pages/pet-projects/**/*.md')
			.sort((a, b) => a.data.order - b.data.order);
	  });
	  

	

	

	//////////// Shortcodes

	// MD in NJK
	config.addPairedShortcode("md", (content) => {
		const md = new markdownIt();
  		return md.render(content.replace(/^\s+/gm, ''));
	});


	config.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

	// Projects
	config.addPairedShortcode("projectColumn", function(content) {
		return `
			<div class="project-desc__column">
				${content}
			</div>
			`;
	});

	config.addPairedShortcode("projectDesc", function(content, title) {
		return `
			<div>
				<h2 class="project-desc__heading">${title}</h2>
				${content}
			</div>
			`;
	});

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
			widths.push(width, width*2);

 		/* let metadataOriginal = await Image(srcAbsolite, {
			widths: widths,
			formats: [null],
			urlPath: outputURL,
			outputDir: outputFolder
		}); */
		let metadataAvif = await Image(srcAbsolite, {
			widths: widths,
			formats: ["avif"],
			urlPath: outputURL,
			outputDir: outputFolder,
		});
		let metadataWebp = await Image(srcAbsolite, {
			widths: widths,
			formats: ["webp"],
			urlPath: outputURL,
			outputDir: outputFolder,
			sharpWebpOptions: {
				quality: 85,
				smartSubsample: true
			}
		});

		const avifSrcset = Object.values(metadataAvif)
			.map(item => `${item[0].url}, ${item[1].url} 2x`)
			.join(", ");

		const webpSources = Object.values(metadataWebp)
			.map(item => {
				const src = item[0].url;
				const srcset = `${item[0].url}, ${item[1].url} 2x`;
				const width = item[0].width;
				const height = item[0].height;
				return `src="${src}" srcset="${srcset}" width="${width}" height="${height}" class="${className}" alt="${alt}" decoding="async" loading="auto"`;
			})
			.join(" ");

		return `<picture><source srcset="${avifSrcset}" type="image/avif"><img ${webpSources}></picture>`;
	});
	



	/////////// Build options

	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy("src/scripts");
	config.addPassthroughCopy( "src/assets/**/*");
	config.addPassthroughCopy("src/*.txt");
	config.addPassthroughCopy("src/manifest.json");
	config.addWatchTarget("./src/styles/**/*.styl");
	config.addWatchTarget("./src/case-studies/**/*.md");
	config.addWatchTarget("./src/pet-projects/**/*.md");
	config.addPassthroughCopy("CNAME");

	// Copy content images to /dist
	config.on('afterBuild', async () => {
		const srcDir = 'src/pages/';
		const destDir = 'dist/';
		const imageExtensions = ['svg', 'png', 'webp', 'jpg'];
		const pattern = `${srcDir}/**/*.{${imageExtensions.join(',')}}`;
	
		try {
			glob.sync(pattern).forEach(async (srcPath) => {
				const destPath = `${destDir}${srcPath.substring(srcDir.length)}`;
				await fs.copy(srcPath, destPath);
			});
			console.log('Image files have been copied');
		} catch (err) {
			console.error(err);
		}
	});

	// Minify HTML for 'production' environment
	if (process.env.ELEVENTY_ENV === 'production') {
		config.addTransform("htmlmin", function(content, outputPath) {
			if (outputPath && outputPath.indexOf('.html') > -1) {
				return htmlmin.minify(content, {
				  useShortDoctype: true,
				  removeComments: true,
				  collapseWhitespace: true,
				  minifyCSS: true
				});
			  }			
			  return content;		
		});
	}
	


	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			layouts: "_templates",
			data: "_data",
		},
		dataTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true,
		templateFormats: [
			"md",
			"njk",
		],
	};
};
