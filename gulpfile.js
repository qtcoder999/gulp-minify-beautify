// npm install --global gulp
// npm install gulp
// npm install --save-dev gulp-cssbeautify
// npm install gulp-clean-css --save-dev

/* collective command */

// npm install --global gulp && npm install gulp && npm install --save-dev gulp-cssbeautify && npm install gulp-clean-css --save-dev

let gulp = require('gulp'),
    cssbeautify = require('gulp-cssbeautify'),
	cleanCSS = require('gulp-clean-css');
 
 
 //beautify
gulp.task('b', function() {
    return gulp.src('./*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css-beautified/'));
});


 
 
 //minify
gulp.task('m', () => {
  return gulp.src('./*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css-minified/'));
});