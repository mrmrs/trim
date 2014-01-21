var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    csslint = require('gulp-csslint');

gulp.task('minify-css', function(){
    gulp.src('css/*.css')
      .pipe(minifyCSS({keepSpecialComments: 0}))
      .pipe(gulp.dest('css/'));
});

gulp.task('minify-js', function() {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

gulp.task('lint', function(){
  gulp.src('./css/*.css')
        .pipe(watch(function(files) {
          return files.pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false
          }))
         .pipe(csslint.reporter());
  }));
});

gulp.task('pre-process', function(){
  gulp.src('./sass/*.scss')
          .pipe(watch(function(files) {
            return files.pipe(sass({includePaths: ['sass/']}))
              .pipe(prefix())
              .pipe(gulp.dest('css/'));
          }));
});

gulp.task('default', function(){
  gulp.watch('sass/**/*.scss', function(event) {
    gulp.run('pre-process');
    gulp.run('lint');
  });
});

gulp.task('production', function(){
    gulp.run('minify-css');
    gulp.run('minify-js');
});

