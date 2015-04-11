var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		jshint = require('gulp-jshint'),
		insert = require('gulp-insert'),
		del = require('del');
	
var d = new Date();
var date = d.getFullYear() + '-' + (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + d.getDate();
var comment = "/*! dijon.js ~ created by Dylan Waits ~ https://github.com/waits/dijon ~ updated " + date + " */\n\n";

gulp.task('default', function() {
  return gulp.src('src/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('dijon.js'))
    .pipe(insert.prepend(comment))
    .pipe(gulp.dest('vendor/assets/javascripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(''));
});