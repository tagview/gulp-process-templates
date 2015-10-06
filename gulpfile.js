'use strict'

var gulp = require('gulp');
var clean = require('gulp-clean');
var processTemplates = require('./index.js');

gulp.task('compile', function() {
  return gulp
    .src('./test/*.js')
    .pipe(processTemplates())
    .pipe(gulp.dest('./compiledtest'));
});

gulp.task('clean', function() {
  return gulp
    .src('./compiledtest', { read: false })
    .pipe(clean({ force: true }));
});
