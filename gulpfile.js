const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('generate', function () {
  return gulp.src('src/**/*.t.js')
    .pipe(babel({
      "plugins": [
          "babel-plugin-syntax-flow",
          'babel-plugin-syntax-decorators',
          'babel-plugin-syntax-class-properties',
          "babel-plugin-immutable-record"
      ]
    }))
    .pipe(rename((path) => { path.basename = path.basename.replace('.t', '') }))
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.t.js'], gulp.series('generate'));
});
