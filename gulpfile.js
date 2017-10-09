var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var path = require('path');
var inject = require('gulp-inject');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

/**
 * @description: "gulp less" This will fetch all the less, convert to css, concat to single file
 * and put at dist/css
*/
gulp.task('less', function () {
    return gulp.src('./src/app/**/*.less')
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css/'))
});

/**
 * @description: "gulp inject-index". This will fetch all the js files and css files and inject
 * to index.html
*/
gulp.task('inject-index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./src/app/**/*.js', './dist/css/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});

/**
 * @description: "gulp build-dev". This will build the application for the development environment
*/
gulp.task('build-dev', ['less', 'inject-index'], function() {
});

/**
 * @description: "gulp live". This will build the application for the development environment
*/
gulp.task('live', ['build-dev'], function() {
    gulp.watch('./src/app/**/*.js', ['inject-index']);
    gulp.watch('./src/app/**/*.less', ['less', 'inject-index']);
});

/**
 * @description: "gulp build-prod". This will build the application for the production environment
*/