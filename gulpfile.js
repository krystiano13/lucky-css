const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');

const styles = () => {
    return src('./**/*.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(dest('./'));
}

const watcher = () => {
    return watch(['./*.scss'], {ignoreInitial: false} ,styles);
}

exports.default = series(watcher, styles);