/* File: gulpfile.js */

'use strict'

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');
    
// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// create a default task and just log a message
gulp.task('build', function () {
    gulp.src('./marshmallow.scss')
   .pipe(sass({
        includePaths: ['mallows'],
        errLogToConsole: true
    }))
    .pipe(autoprefixer({
        browsers: ['last 3 versions', 'IE8'],
        cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('distribution/css'));
});


gulp.task('watch', function () {
  gulp.watch('./mallows/*.scss', ['sass']);
});