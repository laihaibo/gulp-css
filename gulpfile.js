var postcss = require("gulp-postcss");
var gulp = require("gulp");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");

gulp.task("default", function() {
  var plugins = [autoprefixer(), cssnano()];
  return gulp
    .src("./src/*.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./dist"));
});
