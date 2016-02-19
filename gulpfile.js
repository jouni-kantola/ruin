const gulp = require('gulp');
const mocha = require('gulp-mocha');
const ava = require("gulp-ava");
const watch = require('gulp-watch');
const jshint = require('gulp-jshint');

const config = {
    paths: {
        tests: ["lib/**/test/*.js"],
        scripts: ["lib/**/*.js"]
    }
};

gulp.task('test', function() {
  const files = gulp.src(config.paths.tests);
    return files.pipe(ava());
});

gulp.task('lint', function() {
  return gulp.src(config.paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(config.paths.scripts, ['lint', 'test']);
    gulp.watch(config.paths.tests, ['test']);
});

gulp.task('default', ['lint', 'watch']);