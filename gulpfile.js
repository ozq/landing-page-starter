"use strict";

var gulp = require('gulp');
var scss = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var images = require('gulp-image');
var watch = require('gulp-watch');

// CONFIG
var config = {
    url: 'landing-page-starter.app',
    paths: {
        scripts: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/please-wait/build/please-wait.min.js',
            'bower_components/jquery-smooth-scrolling/jquery.smoothscroll.js',
            'assets/src/scripts/**/*.js'
        ],
        images: [
            'assets/src/images/**/*'
        ],
        styles: [
            'bower_components/normalize-css/normalize.css',
            'bower_components/please-wait/build/please-wait.css',
            'assets/src/styles/**/*.scss',
            'bower_components/bootstrap-grid-only/css/grid12.css'
        ],
        pages: [
            'index.php'
        ],
        dist: 'assets/dist'
    }
};

// SCRIPTS
gulp.task('scripts', function() {
    return gulp.src(config.paths.scripts)
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(browserSync.reload({stream: true}))
});

// STYLES
gulp.task('styles', function(){
    return gulp.src(config.paths.styles)
        .pipe(scss({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(concat('app.css'))
        .pipe(cssnano({
            autoprefixer: {
                browsers: ['> 1%', 'last 3 versions'],
                add: true
            }
        }))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(browserSync.reload({stream: true}))
});

// IMAGES
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(images())
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(browserSync.reload({stream: true}))
});

// LIVE RELOAD
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: config.url,
        files: ['./'],
        open: false
    });
});

// TASKS
gulp.task('default', ['browser-sync', 'styles', 'scripts', 'images'], function() {
    gulp.watch(config.paths.styles, ['styles']);
    gulp.watch(config.paths.scripts, ['scripts']);
    gulp.watch(config.paths.images, ['images']);
    gulp.watch(config.paths.pages).on('change', function () {
        browserSync.reload();
    });
});
