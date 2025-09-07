const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs').default;
const terser = require('@rollup/plugin-terser').default;

module.exports = [
	// Basic Bandle
	{
		input: 'src/js/scripts.js',
		output: {
			file: 'dist/js/bundle.js',
			format: 'iife',
		},
		plugins: [
			resolve(),
			commonjs(),
			terser({
				format: {
					comments: false,
				},
			}),
		]
	},
	// FancyBox
	{
		input: 'src/js/fancybox.js',
		output: {
			file: 'dist/js/fancybox.js',
			format: 'iife',
		},
		plugins: [
			resolve(),
			commonjs(),
			terser({
				format: {
					comments: false,
				},
			}),
		]
	}
];
