const gulp = require('gulp');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

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

gulp.task('watch', function() {
    gulp.watch(config.paths.scripts, ['test']);
    gulp.watch(config.paths.tests, ['test']);
});

gulp.task('default', ['test', 'watch']);