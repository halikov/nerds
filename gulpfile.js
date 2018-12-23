const gulp = require('gulp');
const csso = require('gulp-csso');

function styles() {
    return gulp.app('./css/**/*.css')
        .pipe(gulp.dist('./build/css')); 
}

function scripts() {
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);