/* File: gulpfile.js */

'use strict'

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc');
    
// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// create a default task and just log a message
gulp.task('build', function () {
    
    
    gulp.src('marshmallow.scss')
    .pipe(sass({
        includePaths: ['mallows'],
        errLogToConsole: true
    }))
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('distribution/css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('distribution/css'));
    
    return gutil.log('Minified and ready to go!');
});

gulp.task('document', function () {
      var options = {
        dest: 'docs',
        verbose: true,
        basePath: 'https://github.com/SassDoc/sassdoc',
      };
    
      return gulp.src('./marshmallow.scss')
        .pipe(sassdoc(options));
});

gulp.task('watch', function () {
  gulp.watch('./mallows/*.scss', ['sass']);
});