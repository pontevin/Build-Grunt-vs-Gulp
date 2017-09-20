var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist-gulp/css'));
});

gulp.task('css', ['sass'], function () {
    return gulp.src([
            'dist-gulp/css/style.css',
            'assets/css/test.css'
        ])
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist-gulp/css'));
});

gulp.task('js', function () {
    return gulp.src('assets/js/**/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp/js'));
});

gulp.task('img', function () {
    return gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist-gulp/img'));
});

gulp.task('default', ['css', 'js', 'img']);