const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');

function scss() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist-gulp/css'));
}

function css() {
	return gulp.src([
            'dist-gulp/css/style.css',
            'assets/css/test.css'
        ])
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('dist-gulp/css'))
		.pipe(concat('styles.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist-gulp/css'));
}

function js() {
    return gulp.src('assets/js/**/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp/js'));
}

function img() {
    return gulp.src('assets/img/*')
        .pipe(imagemin([
            imagemin.mozjpeg({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest('dist-gulp/img'));
}

exports.default = gulp.parallel(gulp.series(scss, css), js, img);