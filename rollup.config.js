import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
	// Basic Bundle
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
