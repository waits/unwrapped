var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		jshint = require('gulp-jshint'),
		insert = require('gulp-insert'),
		del = require('del');
	
var version = 'v' + require('./package.json').version;
var comment = "/*! unwrapped.js ~ " + version + " ~ created by Dylan Waits ~ https://github.com/waits/unwrapped */\n\n";

gulp.task('default', function() {
  return gulp.src('src/*.js')
    .pipe(concat('unwrapped.js'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(insert.prepend(comment))
    .pipe(gulp.dest(''))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(''));
});