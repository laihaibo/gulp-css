var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('default', function() {
  var plugins = [
    autoprefixer({ browsers: ['last 7 version', 'IOS >= 8'] }),
    cssnano(),
  ];
  return gulp
    .src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});
