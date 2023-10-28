const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const postcssCsso = require('postcss-csso');
const postcss_inline_svg = require('postcss-inline-svg');
const del = require('del');
const cache = require('gulp-cache');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rollup = require('rollup-stream');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const { watch, series, parallel } = require('gulp');


// Styles
function _styles() {
	return gulp.src('src/styles/bundle.styl')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(stylus({'include css': true}))
		.pipe(postcss([
			postcss_inline_svg
		]))
		//.pipe(replace('/../../fonts', '/fonts'))
		.pipe(gulp.dest('dist/styles'));
}

function _styles_watch() {
	watch('src/styles/**/*.styl', series('styles'));
}

function _styles_build() {
	return gulp.src('dist/styles/**/*.css')
	.pipe(postcss([
		autoprefixer({
			cascade: false
		}),
		//postcss_inline_svg,
		postcssCsso({
			restructure: true,
			comments: false
		})
		/*combineCssMedia({
			sort: true
		})*/
	]))
	.pipe(replace('/../../fonts', '/fonts'))
	.pipe(gulp.dest('dist/styles/'))
}


// Scripts
function _scripts(cb) {
	rollup({
		input: 'src/scripts/scripts.js',
		format: 'iife',
	})
	.pipe(source('scripts.js'))
	.pipe(buffer())
	.pipe(babel({
		presets: ['@babel/preset-env'],
	}))
	.pipe(terser())
	.pipe(gulp.dest('dist/scripts'));

	del([
		'dist/scripts/**/*',
		'!dist/scripts/scripts.js'
	]);

	cb();
}

function _images(cb) {
	// Assets and Images
	let $imageminOptions = [
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({progressive: true}),
		imagemin.optipng({optimizationLevel: 7}),
		imagemin.svgo({plugins: [{removeViewBox: true}]})
	];
	gulp.src('dist/assets/**/*')
		.pipe(cache(imagemin($imageminOptions)))
		.pipe(gulp.dest('dist/assets'));
	cb();
}


exports.styles = _styles;
exports.scripts = _scripts;
exports.styles_watch = _styles_watch;

exports.build = parallel(_styles_build, _images);