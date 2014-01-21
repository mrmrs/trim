var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    lr    = require('tiny-lr'),
    server = lr(),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    csslint = require('gulp-csslint');


// Task to minify all css files in the css directory
gulp.task('minify-css', function(){
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('css/'));
});

// Task to minify all js files in the js directory
gulp.task('minify-js', function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

// Task to csslint css and jshint js
gulp.task('lint', function(){
  // Use jshint for js - currently not working it seems
  gulp.src('./js/*.js')
     .pipe(jshint())
     .pipe(jshint.reporter('default'));

  // Use csslint without box-sizing or compatible vendor prefixes
  gulp.src('./css/*.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false
        }))
    .pipe(csslint.reporter());
});

// Task that compiles scss files down to css
gulp.task('pre-process', function(){
  gulp.src('./sass/*.scss')
          .pipe(watch(function(files) {
            return files.pipe(sass({includePaths: ['sass/']}))
              .pipe(prefix())
              .pipe(gulp.dest('css/'))
              .pipe(livereload(server))
          }));
});

 gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe((imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./img'))
});

// DEFAULT TASK
// Process sass and lints outputted css
gulp.task('default', function(){
  server.listen(35729, function (err) {
    if (err) return console.log(err);
    gulp.watch(['./sass/**/*.scss', './js/**/*.js'], function(event) {
      gulp.run('pre-process');
      gulp.run('lint');
    });
  });
});


gulp.task('production', function(){
    gulp.run('minify-css');
    gulp.run('minify-js');
});

