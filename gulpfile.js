'use strict'

var gulp = require('gulp');
var processTemplates = require('./index.js');

gulp.task('compile', function() {
  gulp.src('./test/*.js')
   .pipe(processTemplates())
   .pipe(gulp.dest('./compiledtest'));
});
