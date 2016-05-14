const gulp = require("gulp");
const ava = require("gulp-ava");
const eslint = require("gulp-eslint");

const config = {
    paths: {
        tests: ["lib/**/test/**/*.js", "!node_modules/**"],
        scripts: ["lib/**/*.js", "!node_modules/**"]
    }
};

gulp.task("test", () => {
    return gulp.src(config.paths.tests[0])
        .pipe(ava());
});

gulp.task("lint", () => {
    return gulp.src(config.paths.scripts)
        .pipe(eslint({
            extends: "eslint:recommended",
            parser: "babel-eslint",
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    modules: true
                }
            },
            rules: {
                "no-undef": 2,
                "no-console": 0,
                "eqeqeq": 1,
                "camelcase": 1,
                "comma-dangle": 2,
                "quotes": [1, "double"],
                "keyword-spacing": [1, { "after": true }]
            },
            envs: [
                "node",
                "es6"
            ]
        }))
        .pipe(eslint.formatEach("stylish", process.stderr));
});

gulp.task("watch", () => {
    gulp.watch(config.paths.tests, ["test"]);
    gulp.watch(config.paths.scripts, ["lint", "test"]);
});

gulp.task("default", ["lint", "watch"]);