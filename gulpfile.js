// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');

// // Lint Task
// gulp.task('lint', function() {
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('client/app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('client/app/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('client/app/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(''));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('client/app/**/*.js', ['scripts']);
    gulp.watch('client/app/**/*.scss', ['sass']);
});

gulp.task('nodemon', function() {
    // gulp.watch('client/app/**/*.js', ['scripts']);
    gulp.watch('client/app/**/*.scss', ['sass']);
    nodemon('server/app.js');
});


// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);
