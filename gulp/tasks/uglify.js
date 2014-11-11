
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var react = require('gulp-react');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');

module.exports = function () {
  gulp.src('./client/app/**/*.js')
    .pipe(react())
    .pipe(uglify())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/app'));

  gulp.src('./client/app/**/*.css')
    .pipe(minifyCss())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/app'));

  var opts = {spare:true};
  gulp.src('./client/index.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public'));

};
