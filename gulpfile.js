var gulp = require("gulp");
var ts = require('gulp-typescript');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('default', ['watch']);

gulp.task('server', function () {
    const base = function (req, res, next) {
        req.url = req.url.replace('web/', '');
        next();
    };
    connect.server({
        root: 'build',
        port: 4201,
        livereload: true,
        middleware: function (connect, opt) {
            return [
                historyApiFallback({}),
                base
            ]
        }
    });
});

gulp.task('scripts', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(ts({
            module :"amd",
            out:"main.js"
        }))
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('static', function () {
    gulp.src(['src/**/*.html', 'src/**/*.css', 'src/**/*.json'])
        //.pipe(changed('target'))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());

});

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('build', ['scripts', 'static', 'sass']);

gulp.task('watch', ['build', 'server'], function() {
    gulp.watch('./src/**/*.ts', {}, ['scripts']);
    gulp.watch(['src/**/*.html', 'src/**/*.css', 'src/**/*.json'], {}, ['static']);
    gulp.watch('./src/**/*.scss', {}, ['sass'])
});