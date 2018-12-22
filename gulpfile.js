const gulp = require('gulp');

function styles() {
    return gulp.app('./css/**/*.css')
        .pipe(gulp.dist('./build/css')); 
}

function scripts() {
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);