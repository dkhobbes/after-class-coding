var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify'),
var concat = require('gulp-concat');


gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});

gulp.task('coffee', function() {
  gulp.src('scripts/hello.coffee')
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('scripts'))
});

gulp.task('js', function() {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});
