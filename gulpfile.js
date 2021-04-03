var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//style paths
var sassFiles = 'assets/css/*.scss';
var cssDest = 'dist/css/';

const style = () => {
  return gulp.src(sassFiles)
    .pipe(sass())
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream())
}

const watch = () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch(sassFiles, style);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;