// ========================================================================
// Подключение модулей
// ========================================================================
const gulp = require('gulp');
const CompileStylus = require('gulp-stylus');
const pug           = require('gulp-pug');
const fs            = require("fs-extra");
const data          = require('gulp-data');
const pugBeautify   = require('gulp-pug-beautify');
const browserSync   = require('browser-sync');
const concat        = require('gulp-concat'); //  для конкатенации файлов
const uglify        = require('gulp-uglify-es').default; // для сжатия JS, поддерживает ES6
const cssnano       = require('gulp-cssnano'); // для минификации CSS
const rename        = require('gulp-rename'); // для переименования файлов
const del           = require('del'); // для удаления файлов и папок
const cache         = require('gulp-cache'); // Библиотека кеширования
const autoprefixer  = require('autoprefixer'); // для автоматического добавления префиксов
const imagemin      = require('gulp-imagemin'); // для работы с изображениями
const pngquant      = require('imagemin-pngquant'); // для сжатия png
const imageminJpegtran = require('imagemin-jpegtran'); // для сжатия jpg
const imageminGifsicle = require('imagemin-gifsicle'); // для сжатия gif
const imageminSvgo = require('imagemin-svgo'); // для сжатия svg
const gulp_postcss = require('gulp-postcss');
const datauri = require('postcss-data-uri');
const mergeRules = require('postcss-merge-rules'); // Объединяет селекторы с одинаковыми свойствами
const combineCssMedia = require('css-mqpacker'); // Объединяет @media, помещает их в конец css. Работает через postcss. Не очень хорошо, что базовые свойства макета находятся в конце файла.
const htmlbeautify = require('gulp-html-beautify');
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const modifyCssUrls = require('gulp-modify-css-urls'); // Меняет пути к файлам в css
const postcss_inline_svg = require('postcss-inline-svg');
const replace = require('gulp-replace');
const purify = require('gulp-purifycss');	// Убирает неиспользуемые стили
const svgSprite = require('gulp-svg-sprite');
const flatten = require('gulp-flatten');
const htmlmin = require('gulp-htmlmin');
const minifyInline = require('gulp-minify-inline');
const webp = require('gulp-webp');
const sitemap = require('gulp-sitemap');
const removeCode = require('gulp-remove-code');

const { series, parallel } = require('gulp');







/*gulp.task('__svgSprite', function () {
	return gulp.src('src/imgs/!**!/!*.svg')
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg"
				}
			}
		}))
		.pipe(cache(imagemin([
			imagemin.svgo({plugins: [{removeViewBox: true}]})
		])))
		.pipe(gulp.dest('test/imgs/'));
});*/





// ========================================================================
// Компиляция
// ========================================================================
// Stylus, в папку test
function __compileStylus() {
	var $postcss_plugins = [
		postcss_inline_svg,
		autoprefixer({
			cascade: false
		})
		/*combineCssMedia({
			sort: true
		})*/
	];

	return gulp.src('src/styl/bundle.styl')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(CompileStylus({'include css': true}))
		.pipe(gulp_postcss($postcss_plugins))
		.pipe(gulp.dest('test/css'))
		.pipe(browserSync.reload({stream: true}));
}
exports.__compileStylus = __compileStylus;

// Stylus, в папку dist
function __compileStylus_dist() {
	{
		var $postcss_plugins = [
			postcss_inline_svg,
			autoprefixer({
				cascade: false
			})
			/*combineCssMedia({
				sort: true
			})*/
		];

	return gulp.src('src/styl/bundle.styl')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(CompileStylus({'include css': true}))
		.pipe(gulp_postcss($postcss_plugins))
		.pipe(cssnano()) // Сжимаем
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream: true}));
	}
}
exports.__compileStylus_dist = __compileStylus_dist;

// Pug Test
function __compilePug_Test() {
	{
		return gulp.src([
			'src/pug/**/*.pug',
			'!src/pug/_helpers/**/*',
			'!src/pug/_includes/**/*',
			'!src/pug/_templates/**/*',
			'!src/pug/**/*.inc.pug',
			'!src/pug/**/*.tpl.pug',
			'!src/pug/**/*--inc.pug',
			'!src/pug/**/*--tpl.pug',
			'!src/pug/**/_*.pug'
		])
			.pipe(data(function (file) {
				return require('./src/pug/projects.json');
			}))
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(pug())
			//.pipe(pug({pretty: true}))   // Разметка НЕ в одну строку
			.pipe(htmlbeautify({
				"indent_with_tabs": true
			}))
			.pipe(removeCode({production: true}))
			.pipe(gulp.dest("test"))
			.pipe(browserSync.reload({stream: true}));
	}
}
exports.__compilePug_Test = __compilePug_Test;

// Pug Dist
function __compilePug_Dist() {
	{
		return gulp.src([
			'src/pug/**/*.pug',
			'!src/pug/_helpers/**/*',
			'!src/pug/_includes/**/*',
			'!src/pug/_templates/**/*',
			'!src/pug/**/*.inc.pug',
			'!src/pug/**/*.tpl.pug',
			'!src/pug/**/*--inc.pug',
			'!src/pug/**/*--tpl.pug',
			'!src/pug/**/_*.pug'
		])
			.pipe(data(function (file) {
				return require('./src/pug/projects.json');
			}))
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(pug({pretty: true}))   // Разметка НЕ в одну строку
			.pipe(gulp.dest("test"));
	}
}
exports.__compilePug_Dist = __compilePug_Dist;






// ========================================================================
// Объединение файлов
// ========================================================================
// JS
function __mergeJS() {
	{
		return gulp.src(require('./src/js/js-list.json')) // Список подключаемых файлов. Если подключаем один файл, то убрать скобки и запятые
			.pipe(plumber())
			.pipe(concat('bundle.js')) // Собираем их в кучу в новом файле
			.pipe(gulp.dest('test/js')) // Сохраняем в папку
			.pipe(browserSync.reload({stream: true}));
	}

}
exports.__mergeJS = __mergeJS;
















// ========================================================================
// Удаление папок
// ========================================================================
// dist
function __delDist() {
	return del('assets/dist');
}
// test
function __delTest() {
	return del('assets/test');
}









// ========================================================================
// Билд
// ========================================================================

// →  "test"
function BuildTest(cb) {
	// Шрифты
	gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('test/fonts'));

	// Favicons
	gulp.src('src/favicons/**/*')
		.pipe(gulp.dest('test/favicons'));

	// Images
	gulp.src([
		'src/imgs/**/*.{png,gif,jpg,svg}',
		'!src/imgs/**/_*' // Исключаем картинки, которые встраиваются на страницу
		])
		.pipe(gulp.dest('test/imgs'));

	// Images to webp
	gulp.src([
		'src/pug/**/*.{png,jpg}'
	])
		.pipe(webp())
		.pipe(gulp.dest('test/'));

	// pug images, чтобы картинки из папки src/pug были рядом с html, а не в папке test/pug
	gulp.src([
		'src/pug/**/*.{png,gif,jpg,svg}',
		'!src/pug/**/_*' // Исключаем картинки, которые встраиваются на страницу
		])
		.pipe(flatten({ subPath: [0] }))
		.pipe(gulp.dest('test'));

	cb();
}
exports.BuildTest = series(
	parallel(__compileStylus, __compilePug_Test, __mergeJS),
	BuildTest
);

// → "dist"
function Build(cb) {
	// Шрифты
	gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));


	var $imageminSettings = [
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({progressive: true}),
		imagemin.optipng({optimizationLevel: 7}),
		imagemin.svgo({plugins: [{removeViewBox: true}]})
	];

	// Favicons
	gulp.src('src/favicons/**/*')
		.pipe(cache(imagemin($imageminSettings)))
		.pipe(gulp.dest('dist/favicons'));

	// Images (с оптимизацией)
	gulp.src([
		'src/imgs/**/*.{png,gif,jpg,svg}',
		'!src/imgs/**/_*' // Исключаем картинки, которые встраиваются на страницу
		])
		.pipe(cache(imagemin($imageminSettings)))
		.pipe(gulp.dest('dist/imgs'));

	// pug images, чтобы картинки из папки src/pug были рядом с html, а не в папке test/pug
	gulp.src([
		'src/pug/**/*.{png,gif,jpg,svg}',
		'!src/pug/**/_*' // Исключаем картинки, которые встраиваются на страницу
	])
		.pipe(cache(imagemin($imageminSettings)))
		.pipe(flatten({ subPath: [0] }))
		.pipe(gulp.dest('dist'));

	// Images to webp
	gulp.src([
		'src/pug/**/*.{png,jpg}'
	])
		.pipe(webp())
		.pipe(gulp.dest('dist/'));

	// Copy html
	gulp.src('test/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true,
		}))
		.pipe(gulp.dest("dist"));

	// sitemap.xml generation
	gulp.src('test/**/*.html', {
		read: true
	})
		.pipe(sitemap({
			siteUrl: 'https://vasiliy-dudin.com',
			changefreq: 'daily',
			spacing: '\t'
		}))
		.pipe(gulp.dest('./dist'));

	// Copy robots.txt
	gulp.src('src/robots.txt')
		.pipe(gulp.dest("dist"));


	// CSS
	gulp.src('test/css/**/*.css')
		// .pipe(purify(['test/**/*.html'], { // Убирает неиспользуемые стили
		// 	whitelist: require('./src/js/whitelist-purify.json') // Массив с селекторами. Array of selectors to always leave in. Ex. ['button-active', '*modal*'] this will leave any selector that includes modal in it and selectors that match button-active. (wrapping the string with *'s, leaves all selectors that include it)
		// }))

	//.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		/*.pipe(modifyCssUrls({ // Меняет пути к файлам в css
			modify: function (url, filePath) {
				return '/assets/dist' + url;
			}/!*,
			prepend: 'https://fancycdn.com/',
			append: '?cache-buster'*!/
		}))*/
		// Меняет пути к файлам в css
		/*.pipe(replace('\"/fonts', '\"/assets/dist/fonts'))
		.pipe(replace('\'/fonts', '\'/assets/dist/fonts'))*/
		.pipe(cssnano()) // Сжимаем
		.pipe(gulp.dest('dist/css')); // Сохраняем в папку

	// Сжатие JS
	gulp.src('test/js/**/*.js')
		.pipe(plumber())
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('dist/js'));

	cb();
}

exports.Build = series(
	parallel(__delTest, __delDist),
	parallel(__compileStylus, __mergeJS, __compilePug_Dist),
	Build
);






// ========================================================================
// browserSync
// ========================================================================

function LiveReload(cb) {
	browserSync.init({
		server: './test',
		port: 3087,
		notify: false,
		open: false
	});

	gulp.watch('src/styl/**/*.styl',  gulp.series('__compileStylus'));
	gulp.watch('src/js/**/*.js',  gulp.series('__mergeJS'));
	gulp.watch('src/**/*.pug',  gulp.series('__compilePug_Test'));

	cb();
}
exports.browserSync = series(
	parallel(__compileStylus, __mergeJS, BuildTest, __compilePug_Test),
	LiveReload
);
exports.default = LiveReload;