import { defineConfig } from 'vite'

export default defineConfig({
	root: '.', // Root directory for source files
  //plugins: [vue()],
	css: {
		preprocessorOptions: {
		stylus: {
			// Stylus specific options
		},
		},
	},
	build: {
		outDir: 'dist',
		emptyOutDir: false, // Clears the output directory before building
		rollupOptions: {
		input: {
			bundle: 'src/js/scripts.js',
			style: 'src/styles/bundle.styl' 
		},
		output: {
			dir: 'dist',
			entryFileNames: (chunk) => {
				return chunk.name === 'style' ? 'styles/[name].css' : 'js/[name].js';
			},
			chunkFileNames: 'js/[name].js',
			assetFileNames: (asset) => {
				if (asset.name.endsWith('.css')) {
					return 'styles/[name][extname]';
				}
				return 'assets/[name][extname]';
			},
		},
		},
	},
});
