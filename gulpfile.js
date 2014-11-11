var gulp = require('./gulp/index.js')([
  'clean',
  'sass',
  'watch',
  // 'browserify',
  'uglify',
  'resources'
]);

// Default Task
gulp.task('default', ['sass', 'uglify', 'resources', 'watch']);
