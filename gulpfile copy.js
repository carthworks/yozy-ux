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

// Compile and minify Sass files
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css'));
});

// Optimize images and copy to dist folder
gulp.task('images', function () {
  return gulp.src('./src/assets/images/**/*')
    // .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});

  gulp.task('fonts', function() {
    return gulp.src('./src/assets/fonts/**/*')
      .pipe(gulp.dest('./dist/fonts'));
  });

// Concatenate and minify JavaScript files
gulp.task('js', function () {
  return gulp.src('./src/assets/js/**/*.js')
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    // .pipe(concat('scripts.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

  gulp.task('html', function() {
    return gulp.src('*.html')
    .pipe(gulp.dest('./dist/'));
      // .pipe(copy('./dist/'));
  });
  
gulp.task('watch', function() {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/assets/images/**/*', gulp.series('images'));
  gulp.watch('./src/assets/fonts/**/*', gulp.series('fonts'));
  gulp.watch('./src/assets/js/**/*.js', gulp.series('js'));
  gulp.watch('./**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('sass', 'images', 'fonts', 'js','html','watch'));
