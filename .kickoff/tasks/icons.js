/**
 * gulp icons
 * SVG icon creation
 */

const config = require('../config');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');


gulp.task('icons', () => {
	return gulp.src([`${config.icons.srcDir}/*`])
		.pipe(
			imagemin()
		)
		.pipe(
			svgstore()
		)
		.pipe(
			gulp.dest(`${config.icons.distDir}`)
		);
});

