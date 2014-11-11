// Include gulp
var gulp = require('gulp'); 
// Include Our Plugins
var sass = require('gulp-sass');

// Compile Our Sass
module.exports = function() {
  return gulp.src('client/app/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/app/'));
};

