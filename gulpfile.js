const gulp = require('gulp');
// const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
const minifycss = require('gulp-minify-css');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
// const imagemin = require('gulp-imagemin');


gulp.task('sass', function() {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    // .pipe(minifycss())
    // .pipe(jshint())
    // .pipe(uglify())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('images', function() {
    return gulp.src('./src/assets/images/**/*')
      .pipe(gulp.dest('./dist/images'));
  });

  gulp.task('fonts', function() {
    return gulp.src('./src/assets/fonts/**/*')
      .pipe(gulp.dest('./dist/fonts'));
  });

  gulp.task('js', function() {
    return gulp.src('./src/assets/js/**/*.js')
    //   .pipe(minify())
      .pipe(gulp.dest('./dist/js'));
  });

  gulp.task('html', function() {
    return gulp.src('./**/*.html')
    .pipe(gulp.dest('./dist/'));
      // .pipe(copy('./dist/'));
  });
  
gulp.task('watch', function() {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/assets/images/**/*', gulp.series('images'));
  gulp.watch('./src/assets/js/**/*.js', gulp.series('js'));
  gulp.watch('./**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('sass', 'images', 'fonts', 'js','html','watch'));