const gulp = require('gulp');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');
const jshint = require('gulp-jshint');

const config = {
    paths: {
        tests: ['test/**/*.js'],
        scripts: ['src/**/*.js']   
    }
};

gulp.task('test', function() {
  return gulp.src(config.paths.tests, {read: false})
    .pipe(mocha({ reporter: 'dot' }));
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