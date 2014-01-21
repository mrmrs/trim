var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    csslint = require('gulp-csslint');


gulp.task('default', function(){

   gulp.src('./sass/*.scss')
          .pipe(watch(function(files) {
            return files.pipe(sass({includePaths: ['sass/']}))
              .pipe(gulp.dest('./css'));
          }));

    // Lint your css!
    // Let the computer help you. It knows what to do :)
   gulp.src('./css/*.css')
        .pipe(watch(function(files) {
          return files.pipe(csslint())
             .pipe(csslint.reporter());
        }));
});

gulp.task('production', function(){

    gulp.src('css/*.css')
      .pipe(prefix())
      .pipe(gulp.dest('css/'));

    // Minify your css!
    // This removes comments and whitespace. Puts it all on one line.
    gulp.src('./css/*.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('css/'));

    // Optimize your images for production
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'));

});
