var gulp = require('gulp'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	path = require('path'),
	minify = require('gulp-minify'),
	cleanCSS = require('gulp-clean-css'),
	exec = require('child_process').exec,
	Q = require('q');

gulp.task('default', ['scripts', 'less']);

gulp.task('scripts', function() {
	var src = [
		'./lib/jquery-1.11.3.min.js',
		'./lib/jquery.idle.min.js',
		'./lib/jspdf.js', 
		'./lib/fountain.js', 
		'./lib/index.js'
	];
  return gulp.src(src)
    .pipe(concat({ path: './js/app.js', stat: { mode: 0755 }}))
    .pipe(minify({
    	preserveComments : true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('less', function () {
  return gulp.src('./less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css/'));
});
