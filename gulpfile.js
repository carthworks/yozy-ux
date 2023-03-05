const gulp = require('gulp');
// const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
// const minifycss = require('gulp-minify-css');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
// const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const rename = require("gulp-rename");
// const del = require('del');
// const imagemin = require('gulp-imagemin');
const livereload = require("gulp-livereload");


gulp.task('clean-css', function () {
  return del([
      './dist/css/*.css'
  ]);
});

// Compile and minify Sass files
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss','./src/assets/sass/**/*')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    // .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());
});

gulp.task('icons', function () {
  return gulp.src('./src/assets/sass/icons.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    // .pipe(cleanCSS())
    .pipe(concat('icons.css'))
    .pipe(rename({ suffix: ".min" }))
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
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});

  gulp.task('html', function() {
    return gulp.src('*.html')
    .pipe(gulp.dest('./dist/'));
      // .pipe(copy('./dist/'));
  });
  
  gulp.task('watch', function() {
    gulp.watch('./src/assets/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/assets/sass/**/*.scss', gulp.parallel('icons'));
    gulp.watch('./src/assets/images/**/*', gulp.parallel('images'));
    gulp.watch('./src/assets/fonts/**/*', gulp.parallel('fonts'));
    gulp.watch('./src/assets/js/**/*.js', gulp.series('js'));
    gulp.watch('./**/*.html', gulp.series('html'));
    livereload.listen();
  });

// Define default task
gulp.task('default', gulp.series('sass', gulp.parallel('html','images', 'icons', 'fonts', 'js','sass' ), 'watch'));
