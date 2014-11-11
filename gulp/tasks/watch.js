// Include gulp
var gulp = require('gulp'); 

// Watch Files For Changes
module.exports = function() {
  gulp.watch('client/**/*.js', ['uglify', 'browserify']);
  gulp.watch('client/**/*.scss', ['sass']);
};

